import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'play-list-add-check',
  templateUrl: './play-list-add-check.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayListAddCheckComponent {
  @Input() text: string = "";
}
