import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'card-basic',
  styleUrls: ['./card-basic.component.scss'],
  templateUrl: './card-basic.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardBasicComponent {

  @Input() title: string = "";
  @Input() subTitle?: string = "";
  @Input() url: string = "";
  @Input() styleSuffix: string = "";
}
