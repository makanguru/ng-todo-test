import { Task } from "./task.model";

export class TaskList {
    id: any;
    name: string | undefined;

    constructor(id: any, name: string | undefined) {
        this.id = id;
        this.name = name;
    }
}
