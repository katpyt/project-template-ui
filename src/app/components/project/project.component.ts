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

  readonly siteTitle: string = "project";

  readonly projectList$: Observable<ProjectViewModel[]> = this._projectService.getAll().pipe(
    shareReplay(1),
    map((projects) => projects.map((project) => ({
      name: project.name,
      dueInfo: project.dueDate,
      progressPercentage: project.percentage.toString(),
      progressColor: 'bg-info'
    })))
  );

  constructor(private _projectService: ProjectService) {
  }

}
