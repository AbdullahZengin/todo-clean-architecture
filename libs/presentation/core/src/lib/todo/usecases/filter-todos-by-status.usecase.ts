import { Todo } from '../entities/todo.entity';

export abstract class IFilterTodosByStatusUsecase {
  abstract execute(todos: Todo[], status: boolean): Promise<Todo[]>;
}

export class FilterTodosByStatusUsecase implements IFilterTodosByStatusUsecase {
  async execute(todos: Todo[], status: boolean): Promise<Todo[]> {
    return todos.filter((todo) => todo.status === status);
  }
}
