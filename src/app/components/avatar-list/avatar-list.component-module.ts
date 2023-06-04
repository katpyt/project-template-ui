import { NgModule } from '@angular/core';
import { AvatarListComponent } from './avatar-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UrlPipeModule } from 'src/app/pipes/url/url.pipe-module';

@NgModule({
  imports: [RouterModule, CommonModule, UrlPipeModule],
  declarations: [AvatarListComponent],
  providers: [],
  exports: [AvatarListComponent]
})
export class AvatarListComponentModule {
}
