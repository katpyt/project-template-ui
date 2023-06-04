import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamService } from '../../services/team.service';
import { TeamViewModel } from './team.view-model';
import { taggedTemplate } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'team',
  styleUrls: ['./team.component.scss'],
  templateUrl: './team.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamComponent {

  @Input() source: string = "own";

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
