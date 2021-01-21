import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';
import { TaskList } from 'src/app/tasklist.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  listId: any;
  tasks: Task[] | undefined;
  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService) {
    // this.list = new TaskList(0, "Unknown");
  }

  ngOnInit() {
    this.isLoading = true;

    this.route.paramMap.pipe(
      switchMap(async (params) => params.get('id'))
    ).subscribe(data => {
      console.log("route for todo-list changed", data);
      this.listId = data;
      this.isLoading = true;
      this.refreshListTasks();
    });
  }

  refreshListTasks() {
    this.taskService.getTaskListTasks(this.listId, true).subscribe(
      (r) => { this.tasks = r; },
      (e) => { alert("Failed to get tasks"); console.log(e); },
      () => { this.isLoading = false; }
    );
  }

  modelUpdated(newTask: Task) {
    if (this.tasks) {
      for (let task of this.tasks) {
        if (task.id === newTask.id) {
          Object.assign(task, newTask);
        }
      }
    }
  }

  taskAdded(task: Task) {
    this.tasks?.push(task);
  }

  taskRemoved(task: Task) {
    // Let remove animation fade with timeout
    setTimeout(() => this.tasks?.splice(this.tasks?.indexOf(task), 1), 500);
  }

  getTasks() {
    return this.isThereAreNoTasks() ? [] : this.tasks;
  }

  isThereAreNoTasks() {
    return this.tasks && this.tasks.length == 0;
  }

  isListAvailable() {
    return this.listId ? true : false;
  }

  isListNotAvailable() {
    return !this.isListAvailable();
  }
}
