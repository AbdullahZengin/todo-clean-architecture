import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';

export interface ICreateTodoUsecase {
  execute(todo: Todo): Promise<Todo>;
}

export class CreateTodoUsecase implements ICreateTodoUsecase {
  constructor(private todoRepository: ITodoRepository) {}

  execute(todo: Todo): Promise<Todo> {
    return this.todoRepository.create(todo);
  }
}
