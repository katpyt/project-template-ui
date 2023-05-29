import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBasicComponentModule } from '../card-basic/card-basic.component-module';
import { TeamComponent } from './team.component';

@NgModule({
  imports: [CardBasicComponentModule, CommonModule],
  declarations: [TeamComponent],
  providers: [],
  exports: [TeamComponent]
})
export class TeamComponentModule {
}
