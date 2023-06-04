import { NgModule } from '@angular/core';
import { TeamDetailComponent } from './team-detail.component';
import { TitleComponentModule } from '../title/title.component-module';
import { BrowseTextPipeModule } from 'src/app/pipes/browse-text/browse-text.pipe-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { CommonModule } from '@angular/common';
import { TabNavigationComponentModule } from '../tab-navigation/tab-navigation.component-module';
import { CardBasicComponentModule } from '../card-basic/card-basic.component-module';

@NgModule({
  imports: [TitleComponentModule, BrowseTextPipeModule, AvatarListComponentModule, CommonModule, TabNavigationComponentModule, CardBasicComponentModule],
  declarations: [TeamDetailComponent],
  providers: [],
  exports: [TeamDetailComponent]
})
export class TeamDetailComponentModule {
}
