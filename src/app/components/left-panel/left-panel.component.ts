import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'left-panel',
  styleUrls: ['./left-panel.component.scss'],
  templateUrl: './left-panel.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeftPanelComponent {
}
