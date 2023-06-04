import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'url' })
export class UrlPipe implements PipeTransform {
  transform(name: string, id: string): string {

    if (!id) return `/${name}s`;

    return `/${name}s/${id}`
  }
}
