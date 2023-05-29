import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { ProjectService } from '../../services/project.service';
import { ProjectViewModel } from './project.view-model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {

  readonly projectList$: Observable<ProjectViewModel[]> = this._projectService.getAll().pipe(
    shareReplay(1),
    map((projects) => projects.map((project) => ({
      name: project.name,
      dueInfo: project.dueDate,
      progressPercentage: project.percentage.toString(),
      progressColor: this.getProgressColor(project.percentage)
    })))
  );

  constructor(private _projectService: ProjectService) {
  }

  private getProgressColor(percentage: number): string {
    return percentage <= 25
      ? "bg-success"
      : percentage <= 50
        ? "bg-info"
        : percentage <= 75
          ? "bg-warning"
          : "bg-danger";
  }

}
