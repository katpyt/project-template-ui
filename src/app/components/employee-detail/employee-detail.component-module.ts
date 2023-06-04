import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailComponent } from './employee-detail.component';
import { TabNavigationComponentModule } from '../tab-navigation/tab-navigation.component-module';
import { CardProgressBarAvatarsComponentModule } from '../card-progress-bar-avatars/card-progress-bar-avatars.component-module';
import { CardBasicComponentModule } from '../card-basic/card-basic.component-module';
import { PlayListAddCheckComponentModule } from '../play-list-add-check/play-list-add-check.component-module';
import { AvatarListComponentModule } from '../avatar-list/avatar-list.component-module';
import { UrlPipeModule } from 'src/app/pipes/url/url.pipe-module';
import { ClassForVisibilityDirectiveModule } from 'src/app/directives/class-for-visibility/class-for-visibility.directive-module';
import { AppEmitterDirectiveModule } from 'src/app/directives/app-emitter/app-emitter.directive-module';

@NgModule({
  imports: [CommonModule, TabNavigationComponentModule, CardProgressBarAvatarsComponentModule
    , CardBasicComponentModule, PlayListAddCheckComponentModule
    , AvatarListComponentModule, UrlPipeModule, ClassForVisibilityDirectiveModule, AppEmitterDirectiveModule],
  declarations: [EmployeeDetailComponent],
  providers: [],
  exports: [EmployeeDetailComponent]
})
export class EmployeeDetailComponentModule {
}
