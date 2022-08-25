import { ITodoRepository } from '../todo.repository.interface';

export interface IDeleteTodoUsecase {
  execute(id: string): Promise<void>;
}

export class DeleteTodoUsecase implements IDeleteTodoUsecase {
  constructor(private todoRepository: ITodoRepository) {}

  execute(id: string): Promise<void> {
    return this.todoRepository.delete(id);
  }
}
