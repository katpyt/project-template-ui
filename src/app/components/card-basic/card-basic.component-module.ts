import { NgModule } from '@angular/core';
import { CardBasicComponent } from './card-basic.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [CardBasicComponent],
  providers: [],
  exports: [CardBasicComponent]
})
export class CardBasicComponentModule {
}
