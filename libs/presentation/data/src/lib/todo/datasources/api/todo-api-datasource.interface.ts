import { Todo } from '@udao/presentation-core';

export abstract class ITodoApiDatasource {
  abstract getAllTodos(): Promise<Todo[]>;

  abstract createTodo(todo: Todo): Promise<Todo>;

  abstract updateTodo(todo: Todo): Promise<Todo>;

  abstract deleteTodo(id: string): Promise<void>;

  abstract toggleTodoStatus(id: string): Promise<void>;
}
