import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import AddTodosComponent from "./add.todos.component";

const routes: Routes = [
  {
    path: "",
    component: AddTodosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTodosRoutingModule {}
