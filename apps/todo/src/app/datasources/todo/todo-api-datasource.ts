import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  CREATE_TODO_URL,
  GET_ALL_TODOS_URL,
  UPDATE_TODO_STATUS_URL,
  UPDATE_TODO_URL,
} from '@udao/api-interface';
import { Todo } from '@udao/presentation-core';
import { ITodoApiDatasource } from '@udao/presentation-data';

import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class TodoApiDatasource implements ITodoApiDatasource {
  private readonly SERVER_URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllTodos(): Promise<Todo[]> {
    return firstValueFrom(
      this.http.get<Todo[]>(`${this.SERVER_URL}/${GET_ALL_TODOS_URL.call()}`)
    );
  }

  createTodo(todo: Todo): Promise<Todo> {
    return firstValueFrom(
      this.http.post<Todo>(`${this.SERVER_URL}/${CREATE_TODO_URL.call()}`, todo)
    );
  }

  updateTodo(todo: Todo): Promise<Todo> {
    return firstValueFrom(
      this.http.put<Todo>(`${this.SERVER_URL}/${UPDATE_TODO_URL.call()}`, todo)
    );
  }

  async toggleTodoStatus(id: string): Promise<void> {
    await firstValueFrom(
      this.http.put(`${this.SERVER_URL}/${UPDATE_TODO_STATUS_URL.call(id)}`, {})
    );
  }
}
