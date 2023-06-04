import { NgModule } from '@angular/core';
import { ProjectComponent } from './project.component';
import { CommonModule } from '@angular/common';
import { CardProgressBarComponentModule } from '../card-progress-bar/card-progress-bar.component-module';
import { TitleComponentModule } from '../title/title.component-module';
import { BrowseTextPipeModule } from 'src/app/pipes/browse-text/browse-text.pipe-module';
import { CapitalizeFirstLetterPipeModule } from 'src/app/pipes/capitalize-first-letter/capitalize-first-letter.pipe-module';
import { CardBasicComponentModule } from '../card-basic/card-basic.component-module';

@NgModule({
  imports: [CardProgressBarComponentModule, CardBasicComponentModule, CommonModule, TitleComponentModule, BrowseTextPipeModule, CapitalizeFirstLetterPipeModule, BrowseTextPipeModule],
  declarations: [ProjectComponent],
  providers: [],
  exports: [ProjectComponent]
})
export class ProjectComponentModule {
}
