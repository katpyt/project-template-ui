import { ProjectModel } from "src/app/models/project.model";
import { TeamModel } from "src/app/models/team.model";

export interface EmployeeDetailViewModel {
  readonly id: string;
  readonly avatarUrl: string;
  readonly fullName: string;
  readonly position: string;
  readonly teams: {
    readonly styleSuffix: string;
    readonly id: string;
    readonly name: string;
    readonly info: string;
    readonly avatarList: {
      readonly id: string;
      readonly name: string;
      readonly url: string;
    }[];
  }[],
  readonly projects: {
    readonly id: string;
    readonly name: string;
    readonly dueDays: string;
    readonly tasksStatus: string;
  }[]
}
