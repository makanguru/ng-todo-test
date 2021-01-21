import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Todo, listTodo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = listTodo;

  constructor() { }

  // get todo
  getTodo = ()=> {
    return this.todos;
  }

  // Toggle Completed
  toggleCompleted = ( todo: Todo ) => {
    this.todos =  this.todos.filter(t => t.id !== todo.id)
  }

  // Delete Todo
  deleteTodo = ( todo: Todo )=> {
    this.todos =  this.todos.filter(t => t.id !== todo.id)
  }

  // Add Todo
  addTodo = (adding: any ) => {


    if (adding) {
      const maxId = this.todos.reduce((max, item) => item.id > max ? item.id : max, 0) + 1;
      const todo = {
        id: maxId,
        title: adding.title,
        completed: adding.completed
      }

      let rand = 5 + Math.random() * 6

      setTimeout(() => {
        this.todos.push(todo);
      }, Math.round(rand) * 1000)

    }
  }

}
