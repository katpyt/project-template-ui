import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { ProjectComponent } from './components/project/project.component';
import { TaskComponent } from './components/task/task.component';
import { TeamComponentModule } from './components/team/team.component-module';
import { ProjectComponentModule } from './components/project/project.component-module';
import { TaskComponentModule } from './components/task/task.component-module';

const routes: Routes = [
  { path: 'teams', component: TeamComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'tasks', component: TaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), TeamComponentModule, ProjectComponentModule, TaskComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
