import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';

export abstract class IGetAllTodosUsecase {
  abstract execute(): Promise<Todo[]>;
}
export class GetAllTodosUsecase implements IGetAllTodosUsecase {
  constructor(private todoRepository: ITodoRepository) {}

  execute(): Promise<Todo[]> {
    return this.todoRepository.getAll();
  }
}
