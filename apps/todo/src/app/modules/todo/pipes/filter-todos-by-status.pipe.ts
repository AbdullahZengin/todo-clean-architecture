import { Pipe, PipeTransform } from '@angular/core';
import { IFilterTodosByStatusUsecase, Todo } from '@udao/presentation-core';

@Pipe({ name: 'filterTodoByStatus' })
export class FilterTodosByStatusPipe implements PipeTransform {
  constructor(
    private filterTodosByStatusUsecase: IFilterTodosByStatusUsecase
  ) {}

  async transform(
    todos: Todo[] | null,
    status: boolean | undefined
  ): Promise<Todo[]> {
    if (todos === null) return [];

    if (status === undefined) return todos;

    return this.filterTodosByStatusUsecase.execute(todos, status);
  }
}
