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

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().subscribe( todo => {
      this.todo = todo;
    });
  }

  onSubmit = () => {
    const todo = {
      title : this.title,
      completed : false
    };

    this.todoService.addTodo(todo)
    .subscribe(data => {

    console.log('Вышли из сервиса:', todo)
      this.todo.push(data);


    });


  }




}
