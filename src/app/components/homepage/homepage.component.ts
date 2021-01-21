import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { Subscription } from "rxjs";
import { ListTodoService, TodoResponse } from "../../list.todo.service";

@Component({
  selector: "homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomepageComponent implements OnInit, OnDestroy {
  todos: TodoResponse[];
  completedTodos: TodoResponse[];
  listTodosSubscription$: Subscription | undefined;

  constructor(
    private listTodoService: ListTodoService,
    private changeRef: ChangeDetectorRef
  ) {
    this.todos = [];
    this.completedTodos = [];
  }

  ngOnInit(): void {
    this.listTodosSubscription$ = this.listTodoService
      .getAllTodos()
      .subscribe((data: any) => {
        // console.log("data--->", data);
        const todo = data.filter((single: TodoResponse) => {
          return single.completed;
        });
        const completed = data.filter((single: TodoResponse) => {
          return !single.completed;
        });

        this.todos = todo;
        this.completedTodos = completed;

        this.changeRef.detectChanges();
      });
  }

  ngOnDestroy(): void {
    this.listTodosSubscription$?.unsubscribe();
  }

  trackById(index: number, todo: TodoResponse): number {
    // console.log("Id==>", todo.id);
    return todo.id;
  }
}
