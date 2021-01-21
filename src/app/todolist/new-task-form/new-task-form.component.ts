import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';
import { TaskList } from 'src/app/tasklist.model';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html',
  styleUrls: ['./new-task-form.component.scss']
})
export class NewTaskFormComponent {
  @Input() taskListId: any;
  @Output() taskAdded = new EventEmitter();

  name: any;
  isLoading: boolean = false;

  constructor(private taskService: TaskService) { }

  addTask() {
    if (this.name === "") {
      alert("The title is empty");
      return;
    }

    let task = new Task(undefined, false, this.name, undefined, undefined, new TaskList(this.taskListId, undefined));
    this.isLoading = true;

    this.taskService.addTask(task).subscribe(
      (response) => {
        this.taskAdded.emit(response);
        this.taskService.taskCountChanged.emit();
        this.name = '';
      },
      (error) => {
        alert("Failed to add a new task");
        console.log(error);
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      }
    )
  }
}
