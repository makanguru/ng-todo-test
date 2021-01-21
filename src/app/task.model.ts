import { TaskList } from "./tasklist.model";

export class Task {
    id: any;
    done: boolean;
    title: string | undefined;
    dueTime: string | undefined;
    description: string | undefined;
    taskList: TaskList | undefined;

    constructor(id: any, done: boolean, title: string | undefined, description: string | undefined, dueTime: string | undefined, taskList: TaskList | undefined) {
        this.id = id;
        this.title = title;
        this.done = done;
        this.dueTime = dueTime;
        this.description = description;
        this.taskList = taskList;
    }
}
