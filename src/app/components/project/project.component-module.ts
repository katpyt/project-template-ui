import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { CommonModule } from '@angular/common';
import { CardProgressBarComponentModule } from '../card-progress-bar/card-progress-bar.component-module';
import { TitleComponentModule } from '../title/title.component-module';
import { BrowseTextPipeModule } from 'src/app/pipes/browse-text/browse-text.pipe-module';

@NgModule({
  imports: [CardProgressBarComponentModule, CommonModule, TitleComponentModule, BrowseTextPipeModule],
  declarations: [ProjectComponent],
  providers: [],
  exports: [ProjectComponent]
})
export class ProjectComponentModule {
}
