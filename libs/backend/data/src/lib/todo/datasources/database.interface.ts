import { Todo } from '@udao/backend-core';

export interface IDatabase {
  getAll(): Promise<Todo[]>;
  create(todo: Todo): Promise<Todo>;
  delete(id: string): Promise<void>;
  update(todo: Todo): Promise<Todo>;
}
