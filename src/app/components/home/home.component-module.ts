import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { TeamComponentModule } from '../team/team.component-module';
import { EmployeesComponentModule } from '../employees/employees.component-module';
import { TitleComponentModule } from '../title/title.component-module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [TeamComponentModule, EmployeesComponentModule, TitleComponentModule, CommonModule],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}
