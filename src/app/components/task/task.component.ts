import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { ChecklistModel } from 'src/app/models/checklist.model';
import { ChecklistService } from 'src/app/services/checklist.service';
import { TaskViewModel } from './task.view-model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  readonly taskList$: Observable<TaskModel[]> = this._taskService.getAll();
  readonly checkList$: Observable<ChecklistModel[]> = this._checklistService.getAll();
  readonly avatarList$: Observable<ChecklistModel[]> = this._checklistService.getAll();


  readonly taskFinal$: Observable<TaskViewModel[]> = combineLatest([
    this.taskList$,
    this.checkList$
  ]).pipe(
    map(([tasks, checklistItems]) => {
      return tasks.map((task) => (
        {
          name: task.name,
          dueDate: task.dueDate,
          avatarList: [],
          checklistStatus: task.checkList.map((cl) => {
            return checklistItems
              .filter(item => item.id == cl)
              .reduce((acc2, curr2) => { return curr2.isDone }, false)
          }).reduce((acc, curr) => { return curr ? acc++ : acc }, 0),
          // task.checkList.map((cl) => {
          //   return checklist.filter(item => item.id == cl)
          //     .reduce((acc, curr) => {
          //       return curr.isDone === true ? acc++ : acc
          //     }, 0)
          // }, 0)
        }
      ))
    })
  );

  constructor(private _taskService: TaskService, private _checklistService: ChecklistService) {
  }
}
