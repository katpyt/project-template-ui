import { EmployeeDataForAvatarListModel } from "src/app/models/employee-data-for-avatar-list.model";

export interface TeamDetailViewModel {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly avatarList: EmployeeDataForAvatarListModel[];
  readonly projectList: {
    readonly id: string;
    readonly name: string;
    readonly dueDate: string;
  }[]
}
