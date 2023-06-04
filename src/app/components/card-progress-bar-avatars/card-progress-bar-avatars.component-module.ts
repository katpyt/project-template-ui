import { NgModule } from '@angular/core';
import { CardProgressBarAvatarsComponent } from './card-progress-bar-avatars.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';

@NgModule({
  imports: [CommonModule, RouterModule, AvatarListComponentModule],
  declarations: [CardProgressBarAvatarsComponent],
  providers: [],
  exports: [CardProgressBarAvatarsComponent]
})
export class CardProgressBarAvatarsComponentModule {
}
