import { EmployeeDataForAvatarListModel } from "../models/employee-data-for-avatar-list.model";

export interface TaskQueryModel {
  readonly title: string;
  readonly subTitle: string;
  readonly progressColor: string;
  readonly progressValue: number;
  readonly tasksStatus: string;
  readonly employeeData: EmployeeDataForAvatarListModel[];
}

