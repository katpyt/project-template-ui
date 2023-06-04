import { Pipe, PipeTransform, } from '@angular/core';

@Pipe({ name: 'dueDate' })
export class DueDatePipe implements PipeTransform {
  transform(date: number): string {

    return `Due on ${new Date(date * 1000).toLocaleDateString()}`;
  }


}
