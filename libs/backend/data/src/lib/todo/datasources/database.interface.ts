import { Todo } from '@udao/backend-core';

export abstract class ITodoDatasource {
  abstract getAll(): Promise<Todo[]>;
  abstract create(todo: Todo): Promise<Todo>;
  abstract delete(id: string): Promise<void>;
  abstract update(todo: Todo): Promise<Todo>;
}
