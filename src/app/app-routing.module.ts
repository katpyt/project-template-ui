import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { HomeComponent } from './components/home/home.component';
import { TeamComponentModule } from './components/team/team.component-module';
import { ProjectComponentModule } from './components/project/project.component-module';
import { TaskComponentModule } from './components/task/task.component-module';
import { EmployeesComponentModule } from './components/employees/employees.component-module';
import { HomeComponentModule } from './components/home/home.component-module';
import { TeamDetailComponentModule } from './components/team-detail/team-detail.component-module';

const routes: Routes = [
  { path: 'teams', component: TeamComponent },
  { path: 'teams/:id', component: TeamDetailComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'tasks', component: TaskComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/:id', component: EmployeeDetailComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TeamComponentModule, ProjectComponentModule, TaskComponentModule, EmployeesComponentModule, HomeComponentModule, TeamDetailComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
