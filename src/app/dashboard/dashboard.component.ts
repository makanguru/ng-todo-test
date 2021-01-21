import { Component } from '@angular/core';
import { Dashboard } from '../dashboard.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  isLoading: boolean = false;
  dashboard: Dashboard | undefined;

  constructor(
    private taskService: TaskService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.refreshDashboard();

    this.taskService.taskCountChanged.subscribe(() => this.refreshDashboard());
  }

  refreshDashboard() {
    this.taskService.getDashboard().subscribe(
      r => {
        this.dashboard = r;
        this.isLoading = false;
      },
      e => {
        console.log("Failed to fetch dashboard", e);
        this.isLoading = false;
      });
  }
}
