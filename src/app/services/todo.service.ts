import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  addTodo = (todo: any ) => {

    const maxId = this.todos.reduce((max, item) => item.id > max ? item.id : max, 0);
    return this.todos.push(todo)

  }

}
