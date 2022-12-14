import { Todo } from './entities/todo.entity';
export abstract class ITodoRepository {
  abstract getAll(): Promise<Todo[]>;
  abstract getById(id: string): Promise<Todo>;
  abstract create(todo: Todo): Promise<Todo>;
  abstract delete(id: string): Promise<void>;
  abstract update(todo: Partial<Todo>): Promise<Todo>;
}
