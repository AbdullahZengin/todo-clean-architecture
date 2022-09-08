import { ITodoRepository, Todo } from '@udao/presentation-core';
import { ITodoApiDatasource } from './datasources/api/todo-api-datasource.interface';

export class TodoRepository implements ITodoRepository {
  constructor(private apiDatasource: ITodoApiDatasource) {}

  getAllTodos(): Promise<Todo[]> {
    return this.apiDatasource.getAllTodos();
  }

  toggleTodoStatus(id: string): Promise<void> {
    return this.apiDatasource.toggleTodoStatus(id);
  }
}
