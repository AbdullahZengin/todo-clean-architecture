import { Provider } from '@angular/core';
import {
  CreateTodoUsecase,
  GetAllTodosUsecase,
  ICreateTodoUsecase,
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
];
