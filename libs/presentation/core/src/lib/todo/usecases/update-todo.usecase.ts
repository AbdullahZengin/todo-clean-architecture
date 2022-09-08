import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';

export abstract class IUpdateTodoUsecase {
  abstract execute(todo: Todo): Promise<Todo>;
}

export class UpdateTodoUsecase implements IUpdateTodoUsecase {
  constructor(private todoRepository: ITodoRepository) {}

  execute(todo: Todo): Promise<Todo> {
    return this.todoRepository.updateTodo(todo);
  }
}
