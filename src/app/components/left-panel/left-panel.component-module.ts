import { NgModule } from '@angular/core';
import { LeftPanelComponent } from './left-panel.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [LeftPanelComponent],
  providers: [],
  exports: [LeftPanelComponent]
})
export class LeftPanelComponentModule {
}
