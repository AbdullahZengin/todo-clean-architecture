import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';
import { IUsecase } from '../../common/usecase.interface';

export class UpdateTodoUsecase implements IUsecase<Promise<Todo>> {
  constructor(private todoRepository: ITodoRepository) {}

  execute(todo: Todo): Promise<Todo> {
    return this.todoRepository.update(todo);
  }
}
