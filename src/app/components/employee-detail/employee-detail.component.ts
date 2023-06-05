import { ChangeDetectionStrategy, Component, HostListener, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeeDetailViewModel } from './employee-detail.view-model';
import { ProjectModel } from '../../models/project.model';
import { EmployeesService } from '../../services/employees.service';
import { ProjectService } from '../../services/project.service';
import { TaskService } from 'src/app/services/task.service';
import { TaskModel } from 'src/app/models/task.model';
import { ChecklistModel } from 'src/app/models/checklist.model';
import { ChecklistService } from 'src/app/services/checklist.service';
import { TeamModel } from 'src/app/models/team.model';
import { TeamService } from 'src/app/services/team.service';
import { TablistModel } from 'src/app/models/tablist.model';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailComponent {

  readonly tabList: TablistModel[] = [{ id: 'Teams', class: 'nav-link active' }, { id: 'Projects', class: 'nav-link' }];
  public selectedCategory: string = this.tabList[0].id;

  readonly employee$: Observable<EmployeeModel> = this._activatedRoute.params.pipe(switchMap(data => this._employeesService.getOne(data['id'])));
  readonly projects$: Observable<ProjectModel[]> = this._projectService.getAll().pipe(shareReplay(1));
  readonly tasks$: Observable<TaskModel[]> = this._taskService.getAll().pipe(shareReplay(1));
  readonly checkList$: Observable<ChecklistModel[]> = this._checkListService.getAll();
  readonly teamList$: Observable<TeamModel[]> = this._teamService.getAll()

  private _categorySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public category$: Observable<string> = this._categorySubject.asObservable();

  onActivated(title: string) {
    this._categorySubject.next(title);
    this.selectedCategory = title;
  }

  readonly employeeDetails$: Observable<EmployeeDetailViewModel> = combineLatest([
    this.employee$,
    this.projects$,
    this.tasks$,
    this.checkList$,
    this.teamList$
  ]).pipe(
    map(([employee, projects, tasks, checkList, teams]) => {
      const checkListsMap: Record<string, string> = checkList.reduce(
        (acc, currVal) => {
          return { ...acc, [currVal.id]: currVal.isDone };
        }, {}
      );

      return ({
        id: employee.id,
        avatarUrl: employee.avatarUrl,
        fullName: employee.firstName + ' ' + employee.lastName,
        position: employee.position,
        teams: teams.filter(team => team.members.find(m => m.id === employee.id))
          .map((team) => {
            const projectCnt = team.projects.length;
            const membersCnt = team.members.length;

            return ({
              styleSuffix: 'team',
              id: team.id,
              name: team.name,
              info: projectCnt + " Projects, " + membersCnt + " Members",
              avatarList: team.members.map(member => {
                return ({
                  id: member.id,
                  name: member.firstName,
                  url: member.avatarUrl
                })
              })
            })
          }),
        projects: projects.filter(project => project.assignees.find(a => a.id === employee.id))
          .map((project) => {
            const tasksDone = tasks.filter(task => task.projectId === project.id)
              .map(task => task.checkList.map((cl) => checkListsMap[cl]).filter(c => c).length)
              .reduce((p, c) => p + c, 0);

            const tasksTotal = tasks.filter(task => task.projectId === project.id)
              .map((task) => task.checkList.length)
              .reduce((p, c) => p + c, 0);

            return ({
              id: project.id,
              name: project.name,
              dueDays: this.calculateDueDays(project.dueDate),
              tasksStatus: tasksDone + "/" + tasksTotal
            })
          })
      })
    })
  );

  constructor(private _employeesService: EmployeesService, private _activatedRoute: ActivatedRoute,
    private _projectService: ProjectService, private _taskService: TaskService,
    private _checkListService: ChecklistService, private _teamService: TeamService) {
  }

  private calculateDueDays(dueDate: string): string {
    const now: Date = new Date;
    const dueDays: number = ((new Date(dueDate).getTime() - now.getTime()) / (1000 * 3600 * 24));

    return `Due ${dueDays.toFixed(0)} day${dueDays < 2 ? '' : 's'}`;
  }
}