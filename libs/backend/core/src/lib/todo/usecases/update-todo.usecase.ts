import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';

export abstract class IUpdateTodoUsecase {
  abstract execute(todo: Partial<Todo>): Promise<Todo>;
}

export class UpdateTodoUsecase implements IUpdateTodoUsecase {
  constructor(private todoRepository: ITodoRepository) {}

  execute(todo: Partial<Todo>): Promise<Todo> {
    return this.todoRepository.update(todo);
  }
}
