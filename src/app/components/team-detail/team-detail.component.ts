import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { TeamService } from '../../services/team.service';
import { ActivatedRoute } from '@angular/router';
import { TeamDetailViewModel } from './team-detail.view-model';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamDetailComponent {

  readonly teamDetails$: Observable<TeamDetailViewModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._teamService.getOne(data['id'])),
  ).pipe(
    map(team => ({
      id: team.id,
      name: team.name,
      description: team.description,
      avatarList: team.members.map(member => {
        return ({
          id: member.id,
          name: member.firstName,
          url: member.avatarUrl
        })
      }),
      projectList: team.projects.map(project => {
        return ({
          id: project.id,
          name: project.name,
          dueDate: project.dueDate,
          url: ""
        })
      })
    }))
  );

  constructor(private _teamService: TeamService, private _activatedRoute: ActivatedRoute) {
  }
}
