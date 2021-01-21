import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface TodoResponse {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class AddTodoService {
  constructor(private httpClient: HttpClient) {}

  addTodo(body: TodoResponse): Observable<TodoResponse> {
    return this.httpClient.post(
      "https://jsonplaceholder.typicode.com/todos",
      body
    ) as Observable<TodoResponse>;
  }
}
