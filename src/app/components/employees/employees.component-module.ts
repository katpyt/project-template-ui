import { NgModule } from '@angular/core';
import { EmployeesComponent } from './employees.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleComponentModule } from '../title/title.component-module';
import { BrowseTextPipeModule } from 'src/app/pipes/browse-text/browse-text.pipe-module';
import { CapitalizeFirstLetterPipeModule } from 'src/app/pipes/capitalize-first-letter/capitalize-first-letter.pipe-module';

@NgModule({
  imports: [CommonModule, RouterModule, TitleComponentModule, BrowseTextPipeModule, CapitalizeFirstLetterPipeModule],
  declarations: [EmployeesComponent],
  providers: [],
  exports: [EmployeesComponent]
})
export class EmployeesComponentModule {
}
