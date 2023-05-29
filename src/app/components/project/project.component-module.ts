import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { CommonModule } from '@angular/common';
import { CardProgressBarComponentModule } from '../card-progress-bar/card-progress-bar.component-module';

@NgModule({
  imports: [CardProgressBarComponentModule, CommonModule],
  declarations: [ProjectComponent],
  providers: [],
  exports: [ProjectComponent]
})
export class ProjectComponentModule {
}
