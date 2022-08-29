import { ITodoRepository, Todo } from '@udao/backend-core';
import { IDatabase } from './datasources/database.interface';

export class TodoRepository implements ITodoRepository {
  constructor(private database: IDatabase) {}

  getAll(): Promise<Todo[]> {
    return this.database.getAll();
  }
  create(todo: Todo): Promise<Todo> {
    return this.database.create(todo);
  }
  delete(id: string): Promise<void> {
    return this.database.delete(id);
  }
  update(todo: Todo): Promise<Todo> {
    return this.database.update(todo);
  }
}
