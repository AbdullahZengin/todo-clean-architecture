import { Provider } from '@angular/core';
import {
  GetAllTodosUsecase,
  IGetAllTodosUsecase,
  ITodoRepository,
} from '@udao/presentation-core';
import { ITodoApiDatasource, TodoRepository } from '@udao/presentation-data';
import { TodoApiDatasource } from '../datasources/todo/todo-api-datasource';

export const TODO_PROVIDERS: Provider[] = [
  {
    provide: ITodoApiDatasource,
    useClass: TodoApiDatasource,
  },
  {
    provide: ITodoRepository,
    useFactory: (todoApiDatasource: ITodoApiDatasource) =>
      new TodoRepository(todoApiDatasource),
    deps: [ITodoApiDatasource],
  },
  {
    provide: IGetAllTodosUsecase,
    useFactory: (todoRepository: ITodoRepository) =>
      new GetAllTodosUsecase(todoRepository),
    deps: [ITodoRepository],
  },
];
