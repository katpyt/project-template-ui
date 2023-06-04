import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, map } from 'rxjs';
import { TeamService } from '../../services/team.service';
import { TeamViewModel } from './team.view-model';

@Component({
  selector: 'team',
  styleUrls: ['./team.component.scss'],
  templateUrl: './team.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {

  readonly siteTitle: string = "team";

  readonly teamList$: Observable<TeamViewModel[]> = this._teamService.getAll().pipe(
    map((teams) => teams.map((team) => {
      return ({
        id: team.id,
        name: team.name,
        teamInfo: team.projects.length + " Projects, " + team.members.length + " Members"
      })
    }))
  );

  constructor(private _teamService: TeamService) {
  }
}
