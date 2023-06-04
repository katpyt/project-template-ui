import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizeFirstLetter' })
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(name: string): string {

    const charsArray = name.split('');
    return charsArray.map((value, index) => index === 0 ? value.toLocaleUpperCase() : value).join('');
  }
}
