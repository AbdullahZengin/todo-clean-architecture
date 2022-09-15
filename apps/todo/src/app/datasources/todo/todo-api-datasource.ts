import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoEndpoints } from '@udao/api-interface';
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
      this.http.get<Todo[]>(
        `${this.SERVER_URL}/${TodoEndpoints.GET_ALL_TODOS.call()}`
      )
    );
  }

  createTodo(todo: Todo): Promise<Todo> {
    return firstValueFrom(
      this.http.post<Todo>(
        `${this.SERVER_URL}/${TodoEndpoints.CREATE_TODO.call()}`,
        todo
      )
    );
  }

  updateTodo(todo: Todo): Promise<Todo> {
    return firstValueFrom(
      this.http.put<Todo>(
        `${this.SERVER_URL}/${TodoEndpoints.UPDATE_TODO.call()}`,
        todo
      )
    );
  }

  async toggleTodoStatus(id: string): Promise<void> {
    await firstValueFrom(
      this.http.put(
        `${this.SERVER_URL}/${TodoEndpoints.UPDATE_TODO_STATUS.call(id)}`,
        {}
      )
    );
  }

  async deleteTodo(id: string): Promise<void> {
    await firstValueFrom(
      this.http.delete(
        `${this.SERVER_URL}/${TodoEndpoints.DELETE_TODO.call(id)}`
      )
    );
  }
}
