import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Directive({ selector: '[classForVisibility]' })
export class ClassForVisibilityDirective implements OnInit {

    private _tabSelectionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
    }


    @Input() classForVisibility?: string;


    @HostListener('click', ['$event'])
    setClass(name: string) {
        console.log('Name: ' + name);
        // this._renderer2.setProperty.class(
        //     this._elementRef.nativeElement,
        //     ,
        //     this.classForVisibility[this._tabSelectionSubject.value]
        // );

        this._renderer2.setProperty(
            this._elementRef.nativeElement,
            'class',
            'tab-pane fade'
        );
        // const arrowEvents = ['ArrowLeft', 'ArrowRight'];
        // console.log(event.key);
        // if (arrowEvents.includes(event.key) && this.bgCarousel) {
        //     if (event.key === 'ArrowRight') {
        //         this._colorsSubject.next(this._colorsSubject.value + 1 > this.bgCarousel.length - 1 ? 0 : this._colorsSubject.value + 1);
        //     }
        //     if (event.key === 'ArrowLeft') {
        //         this._colorsSubject.next(this._colorsSubject.value - 1 < 0 ? this.bgCarousel.length - 1 : this._colorsSubject.value - 1);
        //     }
        //     this._renderer2.class(
        //         this._elementRef.nativeElement,
        //         'tab-pane fade show active',
        //         this.bgCarousel[this._colorsSubject.value]
        //     );
        // }
    }

    ngOnInit(): void {
        if (this.classForVisibility) {
            console.log('this._colorsSubject.value [' + this._tabSelectionSubject.value + ']');
            this._renderer2.setProperty(
                this._elementRef.nativeElement,
                'class',
                'tab-pane fade'
            );
        }
    }
}
