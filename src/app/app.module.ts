import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LeftPanelComponentModule } from './components/left-panel/left-panel.component-module';
import { MainPanelComponentModule } from './components/main-panel/main-panel.component-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainPanelComponentModule,
    LeftPanelComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
