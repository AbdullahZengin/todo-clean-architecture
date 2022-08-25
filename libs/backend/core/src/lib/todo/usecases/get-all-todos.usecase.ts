import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';

export interface IGetAllTodosUseCase {
  execute(): Promise<Todo[]>;
}
export class GetAllTodosUsecase implements IGetAllTodosUseCase {
  constructor(private todoRepository: ITodoRepository) {}

  execute(): Promise<Todo[]> {
    return this.todoRepository.getAll();
  }
}
