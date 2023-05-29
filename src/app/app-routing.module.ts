import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { TeamComponentModule } from './components/team/team.component-module';

const routes: Routes = [{ path: 'teams', component: TeamComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), TeamComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
