import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'card-progress-bar',
  templateUrl: './card-progress-bar.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CardProgressBarComponent {
  @Input() title: string = "";
  @Input() subTitle: string = "";
  @Input() progressColor: string = "";
  @Input() progressValue: string = "";
}
