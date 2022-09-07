import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GET_ALL_TODOS_URL } from '@udao/api-interface';
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
}
