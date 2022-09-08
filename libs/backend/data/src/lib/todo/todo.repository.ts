import { ITodoRepository, Todo } from '@udao/backend-core';
import { ITodoDatasource } from './datasources/database.interface';

export class TodoRepository implements ITodoRepository {
  constructor(private datasource: ITodoDatasource) {}

  getAll(): Promise<Todo[]> {
    return this.datasource.getAll();
  }

  getById(id: string): Promise<Todo> {
    return this.datasource.getById(id);
  }

  create(todo: Todo): Promise<Todo> {
    return this.datasource.create(todo);
  }
  delete(id: string): Promise<void> {
    return this.datasource.delete(id);
  }
  update(todo: Todo): Promise<Todo> {
    return this.datasource.update(todo);
  }
}
