import { Todo } from './entities/todo.entity';
export interface ITodoRepository {
  getAll(): Promise<Todo[]>;
  create(todo: Todo): Promise<Todo>;
  delete(id: string): Promise<void>;
  update(todo: Todo): Promise<Todo>;
}
