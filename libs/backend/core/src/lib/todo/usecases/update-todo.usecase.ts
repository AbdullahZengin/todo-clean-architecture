import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';

export interface IUpdateTodoUsecase {
  execute(todo: Todo): Promise<Todo>;
}

export class UpdateTodoUsecase implements IUpdateTodoUsecase {
  constructor(private todoRepository: ITodoRepository) {}

  execute(todo: Todo): Promise<Todo> {
    return this.todoRepository.update(todo);
  }
}
