import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';

export abstract class IToggleTodoStatusUsecase {
  abstract execute(id: string): Promise<void>;
}

export class ToggleTodoStatusUsecase implements IToggleTodoStatusUsecase {
  constructor(private todoRepository: ITodoRepository) {}

  execute(id: string): Promise<void> {
    return this.todoRepository.toggleTodoStatus(id);
  }
}
