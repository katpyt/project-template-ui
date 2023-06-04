import { NgModule } from '@angular/core';
import { CapitalizeFirstLetterPipe } from './capitalize-first-letter.pipe';

@NgModule({
  imports: [],
  declarations: [CapitalizeFirstLetterPipe],
  providers: [],
  exports: [CapitalizeFirstLetterPipe]
})
export class CapitalizeFirstLetterPipeModule {
}
