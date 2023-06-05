import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({ selector: 'isActive2' })
export class AppEmitterDirective {

    @Output() isActive2: EventEmitter<string> = new EventEmitter<string>();

    @HostListener('click', ['$event'])
    onClicked(event: string) {
        this.isActive2.emit(event);

    }
}
