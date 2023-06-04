import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { CardProgressBarAvatarsViewModel } from './card-progress-bar-avatars.view-model';

@Component({
  selector: 'card-progress-bar-avatars',
  templateUrl: './card-progress-bar-avatars.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardProgressBarAvatarsComponent {

  @Input() cardData: CardProgressBarAvatarsViewModel = {
    title: '', subTitle: '', progressColor: '', progressValue: 0, tasksStatus: '', employeeData: []
  };
}
