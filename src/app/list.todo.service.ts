import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface TodoResponse {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: "root",
})
export class ListTodoService {
  constructor(private httpClient: HttpClient) {}

  getAllTodos(): Observable<TodoResponse[]> {
    return this.httpClient.get(
      "https://jsonplaceholder.typicode.com/todos"
    ) as Observable<TodoResponse[]>;
  }
}
