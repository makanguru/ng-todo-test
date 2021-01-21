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
    this.todo = this.todoService.getTodo()
  }

  deleteTodo = (todo: Todo) => {
    // delete from UI
    this.todo = this.todo.filter(t => t.id !== todo.id);
    // delete from server

    // this.todoService.deleteTodo(todo)
    // .subscribe(data => console.log(data));

  }


}
