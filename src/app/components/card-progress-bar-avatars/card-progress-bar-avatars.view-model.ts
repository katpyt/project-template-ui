export interface CardProgressBarAvatarsViewModel {
  readonly title: string;
  readonly subTitle: string;
  readonly progressColor: string;
  readonly progressValue: number;
  readonly tasksStatus: string;
  // readonly name: string;
  // readonly dueDate: string;
  readonly employeeData: EmployeeDataViewModel[];
}

export interface EmployeeDataViewModel {
  readonly id: string;
  readonly name: string;
  readonly url: string;
}
