import { Todo } from '@udao/presentation-core';

export abstract class ITodoApiDatasource {
  abstract getAllTodos(): Promise<Todo[]>;

  abstract toggleTodoStatus(id: string): Promise<void>;
}
