import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ChecklistModel } from '../../models/checklist.model';
import { EmployeeModel } from '../../models/employee.model';
import { TaskService } from '../../services/task.service';
import { ChecklistService } from '../../services/checklist.service';
import { EmployeesService } from '../../services/employees.service';
import { TaskQueryModel } from 'src/app/queries/task.query-model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  constructor(private _taskService: TaskService
    , private _checklistService: ChecklistService
    , private _employeesService: EmployeesService
    , private _datePipe: DatePipe) {
  }

  readonly checkList$: Observable<ChecklistModel[]> = this._checklistService.getAll();
  readonly employeeList$: Observable<EmployeeModel[]> = this._employeesService.getAll().pipe(shareReplay(1));

  readonly taskList$: Observable<TaskQueryModel[]> = combineLatest([
    this._taskService.getAll(),
    this.checkList$,
    this.employeeList$
  ]).pipe(
    map(([tasks, checklistItems, employees]) => {
      const checkListsMap: Record<string, string> = checklistItems.reduce(
        (acc, currVal) => {
          return { ...acc, [currVal.id]: currVal.isDone };
        }, {}
      );

      const employeesAvatarsMap: Record<string, string> = employees.reduce(
        (acc, currVal) => {
          return { ...acc, [currVal.id]: currVal.avatarUrl };
        }, {}
      );

      const employeesNamesMap: Record<string, string> = employees.reduce(
        (acc, currVal) => {
          return { ...acc, [currVal.id]: currVal.firstName };
        }, {}
      );

      return tasks.map((task) => {
        const tasksDone = task.checkList.map((cl) => checkListsMap[cl]).filter(c => c).length;
        const tasksTotal = task.checkList.length;
        const percentage = tasksTotal > 0 ? (tasksDone / tasksTotal) * 100 : 0;

        return ({
          title: task.name,
          subTitle: `Due on ${this.transformDate(task.dueDate * 1000)}`,
          progressColor: this.getProgressColor(percentage),
          progressValue: percentage,
          tasksStatus: tasksDone + "/" + tasksTotal,
          employeeData: task.assigneeIds.map(id => {
            return ({
              id: id,
              name: employeesNamesMap[id],
              url: employeesAvatarsMap[id]
            })
            // task.assigneeIds.map((id) => {
            //   employees.filter(employee => employee.id === id)
            //     .map(employee => {
            //       return ({
            //         id: employee.id,
            //         name: employee.firstName,
            //         url: employee.avatarUrl
            //       })
            //     })
            // }),
          })
        })
      })
    })
  );

  private transformDate(date: number) {
    if (!date) return '';

    return this._datePipe.transform(date, 'mediumDate');
  }

  private getProgressColor(percentage: number): string {
    return percentage <= 40
      ? "bg-danger"
      : percentage <= 75
        ? "bg-warning"
        : "bg-success";
  }

}
