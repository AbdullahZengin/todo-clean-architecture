import { IFilterTodosByBodyUsecase, Todo } from '@udao/presentation-core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterTodoByBody' })
export class FilterTodosByBodyPipe implements PipeTransform {
  constructor(private filterTodosByBodyUsecase: IFilterTodosByBodyUsecase) {}

  async transform(todos: Todo[] | null, filter: string): Promise<Todo[]> {
    if (todos === null) return [];

    return this.filterTodosByBodyUsecase.execute(todos, filter);
  }
}
