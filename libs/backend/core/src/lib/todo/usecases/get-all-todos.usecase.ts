import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';
import { IUsecase } from '../../common/usecase.interface';

export class GetAllTodosUsecase implements IUsecase<Promise<Todo[]>> {
  constructor(private todoRepository: ITodoRepository) {}

  execute(): Promise<Todo[]> {
    return this.todoRepository.getAll();
  }
}
