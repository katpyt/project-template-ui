import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'card-progress-bar-avatars',
  templateUrl: './card-progress-bar-avatars.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardProgressBarAvatarsComponent {
  @Input() title: string = "";
  @Input() subTitle: string = "";
  @Input() progressColor: string = "";
  @Input() progressValue: string = "";
  @Input() checkListStatus: number = 0;
  @Input() avatars: string[] = [];
}
