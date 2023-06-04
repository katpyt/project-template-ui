import { NgModule } from '@angular/core';
import { TaskComponent } from './task.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CardProgressBarAvatarsComponentModule } from '../card-progress-bar-avatars/card-progress-bar-avatars.component-module';
import { TitleComponentModule } from '../title/title.component-module';
import { BrowseTextPipeModule } from 'src/app/pipes/browse-text/browse-text.pipe-module';

@NgModule({
  imports: [CommonModule, CardProgressBarAvatarsComponentModule, TitleComponentModule, BrowseTextPipeModule],
  declarations: [TaskComponent],
  providers: [DatePipe],
  exports: [TaskComponent]
})
export class TaskComponentModule {
}
