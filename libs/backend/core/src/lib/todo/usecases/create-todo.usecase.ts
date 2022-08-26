import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';

export abstract class ICreateTodoUsecase {
  abstract execute(todo: Todo): Promise<Todo>;
}

export class CreateTodoUsecase implements ICreateTodoUsecase {
  constructor(private todoRepository: ITodoRepository) {}

  execute(todo: Todo): Promise<Todo> {
    return this.todoRepository.create(todo);
  }
}
