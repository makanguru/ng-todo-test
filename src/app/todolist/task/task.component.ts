import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/task.model';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task: Task;
  @Input() showListLink: boolean = false;
  @Output() modelUpdated = new EventEmitter();
  @Output() remove = new EventEmitter();
  modificableTask: Task;
  isModified: boolean;
  isUpdating: boolean;
  isRemoving: boolean;

  constructor(private taskService: TaskService) {
    this.isRemoving = false;
    this.isModified = false;
    this.isUpdating = false;
    this.task = new Task(0, false, "Unknown Task", undefined, undefined, undefined);
    this.modificableTask = new Task(0, false, "Unknown Task", undefined, undefined, undefined);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["task"]) {
      let newTask = changes["task"].currentValue;
      this.resetForm(newTask);
    }
  }

  resetForm(newTask: any) {
    // modificableTask is the copy of original model
    // that can be modified and submit then
    // or modifications can canceled and reverted instead
    Object.assign(this.modificableTask, newTask);

    this.isModified = false;
  }

  doneChanged() {
    // If user is not editing this form, but press checkbox
    // Probably he wants to mark task as completed in fastest way
    // So this means that this change is the only one in this model
    // So immediately send an update request
    if (!this.isModified) {
      // Workaround:
      // For some reason, ngModel doesn't set value on done at this point
      // And if we call updateTask right now, it will use old value
      // So we gonna wait 500ms before sending a request
      // But for visuals, set isUpdating true
      this.isUpdating = true;
      setTimeout(() => this.updateTask(), 500);
    }
  }

  edit(canBeCanceled: boolean) {
    if (canBeCanceled && this.isModified) {
      this.cancelEdits();
    }
    else {
      this.isModified = true;
    }
  }

  cancelEdits() {
    this.resetForm(this.task);
  }

  updateTask() {
    this.isUpdating = true;
    let updatedModel = Object.assign({}, this.modificableTask);

    this.taskService.putTask(updatedModel.id, updatedModel).subscribe(
      (r) => {
        this.modelUpdated.emit(r);
        this.taskService.taskCountChanged.emit();
        this.isModified = false;
      },
      (e) => {
        alert("Failed to update task");
        console.log(e);
        this.isUpdating = false;
      },
      () => {
        this.isUpdating = false;
      });
  }

  removeTask() {
    this.isRemoving = true;
    this.taskService.removeTask(this.task.id).subscribe(
      (r) => {
        this.remove.emit(this.task);
        this.taskService.taskCountChanged.emit();
      },
      (e) => {
        alert("Failed to remove task");
        console.log(e);
        this.isRemoving = false;
      }
    );
  }

  isNoDescription() {
    return this.task.description ? false : true;
  }

  isDueTimeValid() {
    return this.task.dueTime && new Date(this.task.dueTime) > new Date(0);
  }

  isOverdue() {
    return this.task.dueTime && new Date(this.task.dueTime) < new Date();
  }
}
