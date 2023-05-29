export interface TaskModel {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly startDate: number;
    readonly dueDate: number;
    readonly assigneeIds: string[];
    readonly checkList: string[]
    readonly projectId: string;
}
