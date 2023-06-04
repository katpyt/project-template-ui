import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({ selector: '[appEmitter]' })
export class AppEmitterDirective {

    @Input() tabName: string = "";
    @Output() appEmitter: EventEmitter<string> = new EventEmitter<string>();

    @HostListener('click')
    onClicked(tabId: string) {
        // console.log('emit')
        this.appEmitter.emit(this.tabName);
        // console.log('appEmitter: clicked')

        // console.log('tabId ' + tabId)
    }
}
