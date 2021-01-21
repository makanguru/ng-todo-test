import { Component, OnInit } from '@angular/core';

import { Todo } from '../../../models/Todo';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  title!: string;
  todo: Todo[] = [];
  is_loading = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {

  }

  onSubmit = () => {
    this.is_loading = true;
    const todo = {
      title : this.title,
      completed : false
    };
    let rand = 5 + Math.random() * 6;
    this.todoService.addTodo(todo, rand);
    setTimeout(() => this.is_loading = false, Math.round(rand) * 1000)

  }




}
