import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, TemplateRef } from '@angular/core';
import { setUncaughtExceptionCaptureCallback } from 'process';
import { BehaviorSubject } from 'rxjs';

@Directive({ selector: '[classForVisibility]' })
export class ClassForVisibilityDirective {

    private _tabSelectionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');


    @HostListener('appEmitter', ['$event'])
    handle(event: any) {
        // console.log('Handler: I have it!', event);
    }

    // @Input() classForVisibility?: string;
    // @Input() classForVisibility2?: string;
    // @Output() appEmitter: EventEmitter<string> = new EventEmitter<string>();

    // @HostListener('click', ['$event'])
    // click(event: Event, el: ElementRef) {
    //     console.log('appEmitter: clicked')
    //     console.log(event);
    //     console.log(el);
    //     this.appEmitter.emit(this._renderer2.data[0])

    //     this._renderer2.setProperty(
    //         this._elementRef.nativeElement,
    //         'class',
    //         'tab-pane fade'
    //     );
    // }

    // setClass(name: string) {
    //     console.log('Name: ' + name);
    //     // this._renderer2.setProperty.class(
    //     //     this._elementRef.nativeElement,
    //     //     ,
    //     //     this.classForVisibility[this._tabSelectionSubject.value]
    //     // );

    //     this._renderer2.setProperty(
    //         this._elementRef.nativeElement,
    //         'class',
    //         'tab-pane fade'
    //     );

    //     ElementRef nextEl = this._renderer2.nextSibling();

    //     this._renderer2.nextSibling.apply.add(
    //         this._elementRef.nativeElement,
    //         'class',
    //         'tab-pane fade'
    //     );
    // }

    // ngOnInit(): void {
    //     // if (this.classForVisibility) {
    //     //     console.log('this._colorsSubject.value [' + this._tabSelectionSubject.value + ']');
    //     this._renderer2.setProperty(
    //         this.,
    //         'class',
    //         'tab-pane fade'
    //     );
    //     // }
    // }
}
