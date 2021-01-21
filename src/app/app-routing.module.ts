import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoComponent } from './components/todo/todo.component';
import { AddtodoComponent } from './components/pages/addtodo/addtodo.component';

const routes: Routes = [
  { path: '', component: TodoComponent},
  { path: 'addtodo', component: AddtodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
