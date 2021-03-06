import { TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo[] = [];

  constructor(private todoService: TodoService ) {}

  ngOnInit(): void {
    this.todo = this.todoService.getTodo();
  }

  deleteTodo = (todo: Todo) => {
    this.todoService.deleteTodo(todo);
    this.todo = this.todoService.getTodo();
  }


}
