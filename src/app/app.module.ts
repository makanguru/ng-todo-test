import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TaskComponent } from './todolist/task/task.component';
import { NewTaskFormComponent } from './todolist/new-task-form/new-task-form.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodayTasksComponent } from './today-tasks/today-tasks.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NewTaskFormComponent,
    DashboardComponent,
    TodayTasksComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'today', component: TodayTasksComponent },
      { path: 'todo-list/:id', component: TodoListComponent },
      { path: '', redirectTo: '/today', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
