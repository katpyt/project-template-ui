import { NgModule } from '@angular/core';
import { TabNavigationComponent } from './tab-navigation.component';
import { CommonModule } from '@angular/common';
import { ClassForVisibilityDirectiveModule } from 'src/app/directives/class-for-visibility/class-for-visibility.directive-module';

@NgModule({
  imports: [CommonModule, ClassForVisibilityDirectiveModule],
  declarations: [TabNavigationComponent],
  providers: [],
  exports: [TabNavigationComponent]
})
export class TabNavigationComponentModule {
}
