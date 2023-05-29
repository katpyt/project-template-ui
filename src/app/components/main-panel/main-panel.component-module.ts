import { NgModule } from '@angular/core';
import { MainPanelComponent } from './main-panel.component';
import { CardBasicComponentModule } from '../card-basic/card-basic.component-module';

@NgModule({
  imports: [CardBasicComponentModule],
  declarations: [MainPanelComponent],
  providers: [],
  exports: [MainPanelComponent]
})
export class MainPanelComponentModule {
}
