import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamService } from '../../services/team.service';
import { TeamViewModel } from './team.view-model';
import { taggedTemplate } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-team',
  styleUrls: ['./team.component.scss'],
  templateUrl: './team.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {
  readonly teamList$: Observable<TeamViewModel[]> = this._teamService.getAll().pipe(
    shareReplay(1),
    map((teams) => teams.map((team) => ({
      name: team.name,
      teamInfo: team.projects.reduce((counter) => { counter += 1; return counter; }, 0) + " Projects, " + team.members.reduce((counter) => { counter += 1; return counter; }, 0) + " Members"
    })))
  );

  constructor(private _teamService: TeamService) {
  }
}
