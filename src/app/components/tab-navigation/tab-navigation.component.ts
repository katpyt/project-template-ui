import { ChangeDetectionStrategy, Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { TablistModel } from 'src/app/models/tablist.model';

@Component({
  selector: 'tab-navigation',
  templateUrl: './tab-navigation.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNavigationComponent implements OnInit {

  private _selectedTabSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public selectedTab$: Observable<string> = this._selectedTabSubject.asObservable();

  private _tabSubject: BehaviorSubject<TablistModel[]> = new BehaviorSubject<TablistModel[]>([]);
  public tab$: Observable<TablistModel[]> = this._tabSubject.asObservable();

  @Input() tabList: TablistModel[] = [];
  // @Output() appEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() selectedTab: string = "";


  onClick(tabName: string) {
    this._selectedTabSubject.next(tabName);
    this.selectedTab = tabName;
    // this.appEmitter.emit(tabName);
    this._tabSubject.next(this.tabList.map(tab => {
      return {
        id: tab.id,
        class: tab.id !== tabName ? 'nav-link' : 'nav-link active'
      }
    }));
  }

  handleEvent(tabName: string) {

  }

  ngOnInit(): void {
    this._tabSubject.next(this.tabList.map((tab, index) => {
      return {
        id: tab.id,
        class: index === 0 ? 'nav-link active' : 'nav-link'
      }
    }));
  }
}
