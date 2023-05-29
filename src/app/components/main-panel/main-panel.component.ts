import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'main-panel',
  styleUrls: ['./main-panel.component.scss'],
  templateUrl: './main-panel.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPanelComponent {
}
