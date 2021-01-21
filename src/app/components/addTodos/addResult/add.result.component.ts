import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { TodoResponse } from "../add.todo.service";

@Component({
  selector: "add-result",
  templateUrl: "./add.result.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AddResultComponent {
  @Input()
  savedData: TodoResponse | undefined;
}
