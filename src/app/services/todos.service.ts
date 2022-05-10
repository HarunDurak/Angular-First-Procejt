import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../todos/todos.component';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  constructor(private httpClient: HttpClient) {}

  getTodos() {
    return this.httpClient.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}
