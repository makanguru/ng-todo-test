import { Component, OnInit } from '@angular/core';
import { Dashboard } from '../dashboard.model';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss']
})
export class TodayTasksComponent implements OnInit {
  isLoading: boolean = false;
  dashboard: Dashboard | undefined;
  todayTasks: Task[] | undefined;
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.isLoading = true;

    this.refreshDashboard();
    this.refreshTodayTasks();

    this.taskService.taskCountChanged.subscribe(() => this.refreshDashboard());
  }

  refreshTodayTasks() {
    this.taskService.getTasksUntilToday().subscribe(
      response => {
        this.todayTasks = response;
        this.isLoading = false;
      },
      error => {
        alert("Failed to load today tasks");
        console.log(error);

        this.isLoading = false;
      }
    );
  }

  refreshDashboard() {
    this.taskService.getDashboard().subscribe(
      response => {
        this.dashboard = response;
        this.isLoading = false;
      },
      error => {
        alert("Failed to load dashboard");
        console.log(error);

        this.isLoading = false;
      }
    );
  }

  toPluralForm(n: number, one: string, few: string, many: string) {
    let word;

    if (n % 100 != 11 && n % 10 == 1) word = one; // not ends with 11 and ends with 1
    else if ((n % 100 < 10 || n % 100 >= 20)
      && (n % 10 >= 2 && n % 10 < 5)) word = few; // two last digits are < 10 & >= 20, last digit >= 2 & < 5
    else word = many; // other cases

    return n + " " + word;
  }


  modelUpdated(newTask: Task) {
    if (this.todayTasks) {
      for (let oldTask of this.todayTasks) {
        if (oldTask.id === newTask.id) {
          Object.assign(oldTask, newTask);
        }
      }
    }
  }

  taskRemoved(task: Task) {
    // Let remove animation fade with timeout
    setTimeout(() => this.todayTasks?.splice(this.todayTasks?.indexOf(task), 1), 500);
  }
}
