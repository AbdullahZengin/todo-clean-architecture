import { ITodoRepository } from '../todo.repository.interface';
import { IUsecase } from '../../common/usecase.interface';

export class DeleteTodoUsecase implements IUsecase<Promise<void>> {
  constructor(private todoRepository: ITodoRepository) {}

  execute(id: string): Promise<void> {
    return this.todoRepository.delete(id);
  }
}
