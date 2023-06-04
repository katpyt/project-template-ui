import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'title-component',
  templateUrl: './title.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent {

  @Input() h1Data: string = "";
  @Input() pData: string = "";
}
