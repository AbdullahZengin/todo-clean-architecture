import { Provider } from '@angular/core';
import {
  CreateTodoUsecase,
  DeleteTodoUsecase,
  FilterTodosByBodyUsecase,
  FilterTodosByStatusUsecase,
  GetAllTodosUsecase,
  ICreateTodoUsecase,
  IDeleteTodoUsecase,
  IFilterTodosByBodyUsecase,
  IFilterTodosByStatusUsecase,
  IGetAllTodosUsecase,
  ITodoRepository,
  IToggleTodoStatusUsecase,
  IUpdateTodoUsecase,
  ToggleTodoStatusUsecase,
  UpdateTodoUsecase,
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
  {
    provide: IToggleTodoStatusUsecase,
    useFactory: (todoRepository: ITodoRepository) =>
      new ToggleTodoStatusUsecase(todoRepository),
    deps: [ITodoRepository],
  },
  {
    provide: ICreateTodoUsecase,
    useFactory: (todoRepository: ITodoRepository) =>
      new CreateTodoUsecase(todoRepository),
    deps: [ITodoRepository],
  },
  {
    provide: IUpdateTodoUsecase,
    useFactory: (todoRepository: ITodoRepository) =>
      new UpdateTodoUsecase(todoRepository),
    deps: [ITodoRepository],
  },
  {
    provide: IDeleteTodoUsecase,
    useFactory: (todoRepository: ITodoRepository) =>
      new DeleteTodoUsecase(todoRepository),
    deps: [ITodoRepository],
  },
  {
    provide: IFilterTodosByBodyUsecase,
    useFactory: () => new FilterTodosByBodyUsecase(),
    deps: [ITodoRepository],
  },
  {
    provide: IFilterTodosByStatusUsecase,
    useFactory: () => new FilterTodosByStatusUsecase(),
    deps: [ITodoRepository],
  },
];
