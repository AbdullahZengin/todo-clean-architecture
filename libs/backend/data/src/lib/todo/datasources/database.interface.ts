import { Todo } from '@udao/backend-core';

export abstract class IDatabase {
  abstract getAll(): Promise<Todo[]>;
  abstract create(todo: Todo): Promise<Todo>;
  abstract delete(id: string): Promise<void>;
  abstract update(todo: Todo): Promise<Todo>;
}
