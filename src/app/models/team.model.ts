import { MemberModel } from "./member.model";
import { ProjectModel } from "./project.model";

export interface TeamModel {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly members: MemberModel[];
  readonly projects: ProjectModel[];
}





