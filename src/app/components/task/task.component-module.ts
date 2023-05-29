import { NgModule } from '@angular/core';
import { TaskComponent } from './task.component';
import { CommonModule } from '@angular/common';
import { CardProgressBarAvatarsComponentModule } from '../card-progress-bar-avatars/card-progress-bar-avatars.component-module';

@NgModule({
  imports: [CommonModule, CardProgressBarAvatarsComponentModule],
  declarations: [TaskComponent],
  providers: [],
  exports: [TaskComponent]
})
export class TaskComponentModule {
}
