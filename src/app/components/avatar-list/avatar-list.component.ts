import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { EmployeeDataForAvatarListModel } from 'src/app/models/employee-data-for-avatar-list.model';

@Component({
  selector: 'avatar-list',
  templateUrl: './avatar-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarListComponent {

  @Input() avatarsList: EmployeeDataForAvatarListModel[] = [{ id: '', name: '', url: '' }];
}
