import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CardBasicComponentModule } from '../card-basic/card-basic.component-module';
import { TeamComponent } from './team.component';
import { TitleComponentModule } from '../title/title.component-module';
import { BrowseTextPipeModule } from 'src/app/pipes/browse-text/browse-text.pipe-module';
import { CapitalizeFirstLetterPipeModule } from 'src/app/pipes/capitalize-first-letter/capitalize-first-letter.pipe-module';
import { UrlPipeModule } from 'src/app/pipes/url/url.pipe-module';

@NgModule({
  imports: [CardBasicComponentModule, CommonModule, TitleComponentModule, BrowseTextPipeModule, CapitalizeFirstLetterPipeModule, UrlPipeModule],
  declarations: [TeamComponent],
  providers: [DatePipe],
  exports: [TeamComponent]
})
export class TeamComponentModule {
}
