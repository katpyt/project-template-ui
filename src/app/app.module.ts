import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LeftPanelComponentModule } from './components/left-panel/left-panel.component-module';
import { MainPanelComponentModule } from './components/main-panel/main-panel.component-module';
import { RouterModule } from '@angular/router';
import { EmployeeDetailComponentModule } from './components/employee-detail/employee-detail.component-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainPanelComponentModule,
    LeftPanelComponentModule,
    EmployeeDetailComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
