import { Todo } from '../entities/todo.entity';

export abstract class IFilterTodosByBodyUsecase {
  abstract execute(todos: Todo[], filter: string): Promise<Todo[]>;
}

export class FilterTodosByBodyUsecase implements IFilterTodosByBodyUsecase {
  async execute(todos: Todo[], filter: string): Promise<Todo[]> {
    return todos.filter((todo) => todo.body.includes(filter));
  }
}
