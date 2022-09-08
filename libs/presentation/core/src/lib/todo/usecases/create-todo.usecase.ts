import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';

export abstract class ICreateTodoUsecase {
  abstract execute(body: string): Promise<Todo>;
}

export class CreateTodoUsecase implements ICreateTodoUsecase {
  constructor(private todoRepository: ITodoRepository) {}

  execute(body: string): Promise<Todo> {
    return this.todoRepository.createTodo({
      id: Math.random().toString(),
      body: body,
      status: false,
    });
  }
}
