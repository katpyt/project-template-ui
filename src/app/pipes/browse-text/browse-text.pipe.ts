import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'browseText' })
export class BrowseTextPipe implements PipeTransform {
  transform(text: string): string {
    return `You can browse through ${text}s below`
  }
}
