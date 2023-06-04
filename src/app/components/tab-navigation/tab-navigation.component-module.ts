import { NgModule } from '@angular/core';
import { TabNavigationComponent } from './tab-navigation.component';
import { CommonModule } from '@angular/common';
import { ClassForVisibilityDirectiveModule } from 'src/app/directives/class-for-visibility/class-for-visibility.directive-module';
import { AppEmitterDirectiveModule } from 'src/app/directives/app-emitter/app-emitter.directive-module';

@NgModule({
  imports: [CommonModule, ClassForVisibilityDirectiveModule, AppEmitterDirectiveModule],
  declarations: [TabNavigationComponent],
  providers: [],
  exports: [TabNavigationComponent]
})
export class TabNavigationComponentModule {
}
