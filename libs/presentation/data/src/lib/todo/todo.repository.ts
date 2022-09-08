import { ITodoRepository, Todo } from '@udao/presentation-core';
import { ITodoApiDatasource } from './datasources/api/todo-api-datasource.interface';

export class TodoRepository implements ITodoRepository {
  constructor(private apiDatasource: ITodoApiDatasource) {}

  getAllTodos(): Promise<Todo[]> {
    return this.apiDatasource.getAllTodos();
  }

  createTodo(todo: Todo): Promise<Todo> {
    return this.apiDatasource.createTodo(todo);
  }

  updateTodo(todo: Todo): Promise<Todo> {
    return this.apiDatasource.updateTodo(todo);
  }

  deleteTodo(id: string): Promise<void> {
    return this.apiDatasource.deleteTodo(id);
  }

  toggleTodoStatus(id: string): Promise<void> {
    return this.apiDatasource.toggleTodoStatus(id);
  }
}
