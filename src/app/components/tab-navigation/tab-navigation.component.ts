import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TablistModel } from 'src/app/models/tablist.model';

@Component({
  selector: 'tab-navigation',
  templateUrl: './tab-navigation.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNavigationComponent {

  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
  }

  private _selectedTabSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public selectedTab$: Observable<string> = this._selectedTabSubject.asObservable();

  @Input() tabList: TablistModel[] = [];
  @Output() tabSelection: string = "";

  @HostListener('click', ['$event'])
  onClicked(tabName: string) {
    console.log(tabName);


    this._renderer2.setProperty(
      this._elementRef.nativeElement,
      'class',
      'nav-link active'
    );



  }
}
