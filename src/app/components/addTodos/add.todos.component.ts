import { Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AppSharedService } from "../../app.shared.service";
import { AddTodoService, TodoResponse } from "./add.todo.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "add-todos",
  templateUrl: "./add.todos.component.html",
  styleUrls: ["./add.todos.component.less"],
  providers: [AddTodoService],
})
export default class AddTodosComponent implements OnDestroy {
  todoForm = new FormGroup({
    completed: new FormControl(false),
    title: new FormControl("", Validators.required),
  });

  savedData: TodoResponse | undefined;
  addTodoSubscription$: Subscription | undefined;

  constructor(
    private router: Router,
    private appSharedService: AppSharedService,
    private addTodoService: AddTodoService
  ) {}

  ngOnDestroy(): void {
    this.addTodoSubscription$?.unsubscribe();
  }

  cancelAddTodo(): void {
    this.router.navigate(["showTodos"]);
    this.appSharedService.setSelectedTab(1);
  }

  onSubmit(): void {
    const { title, completed } = this.todoForm.value;
    this.addTodoSubscription$ = this.addTodoService
      .addTodo({
        userId: 1,
        title: title,
        completed: completed,
      })
      .subscribe((response) => {
        console.log("response-->", response);
        this.savedData = response;
      });
  }
}
