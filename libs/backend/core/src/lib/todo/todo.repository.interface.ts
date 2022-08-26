import { Todo } from './entities/todo.entity';
export abstract class ITodoRepository {
  abstract getAll(): Promise<Todo[]>;
  abstract create(todo: Todo): Promise<Todo>;
  abstract delete(id: string): Promise<void>;
  abstract update(todo: Todo): Promise<Todo>;
}
