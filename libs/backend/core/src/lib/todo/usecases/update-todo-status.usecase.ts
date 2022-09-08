import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';

export abstract class IUpdateTodoStatusUsecase {
  abstract execute(id: string): Promise<Todo>;
}

export class UpdateTodoStatusUsecase implements IUpdateTodoStatusUsecase {
  constructor(private todoRepository: ITodoRepository) {}

  async execute(id: string): Promise<Todo> {
    const todoToUpdate = await this.todoRepository.getById(id);

    if (!todoToUpdate) {
      throw new Error('Todo could not found');
    }

    todoToUpdate.status = !todoToUpdate.status;

    return this.todoRepository.update(todoToUpdate);
  }
}
