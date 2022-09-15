import { MongoAuthDatasourceModule } from './../datasources/mongo/auth/mongo-auth-datasource.module';
import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import {
  AuthRepository,
  IAuthDatabaseDatasource,
  ITodoDatasource,
  TodoRepository,
} from '@udao/backend-data';
import { MongoTodoDatasourceModule } from '../datasources/mongo/todo/mongo-todo-datasource.module';

import {
  CreateTodoUsecase,
  DeleteTodoUsecase,
  GetAllTodosUsecase,
  IAuthRepository,
  ICreateTodoUsecase,
  IDeleteTodoUsecase,
  IGetAllTodosUsecase,
  ILoginUsecase,
  ITodoRepository,
  IUpdateTodoStatusUsecase,
  IUpdateTodoUsecase,
  LoginUsecase,
  UpdateTodoStatusUsecase,
  UpdateTodoUsecase,
} from '@udao/backend-core';

export const PROVIDERS: Provider[] = [
  {
    inject: [ITodoDatasource],
    provide: ITodoRepository,
    useFactory: (datasource: ITodoDatasource) => {
      return new TodoRepository(datasource);
    },
  },
  {
    inject: [ITodoRepository],
    provide: ICreateTodoUsecase,
    useFactory: (todoRepository: ITodoRepository) =>
      new CreateTodoUsecase(todoRepository),
  },
  {
    inject: [ITodoRepository],
    provide: IGetAllTodosUsecase,
    useFactory: (todoRepository: ITodoRepository) =>
      new GetAllTodosUsecase(todoRepository),
  },
  {
    inject: [ITodoRepository],
    provide: IDeleteTodoUsecase,
    useFactory: (todoRepository: ITodoRepository) =>
      new DeleteTodoUsecase(todoRepository),
  },
  {
    inject: [ITodoRepository],
    provide: IUpdateTodoUsecase,
    useFactory: (todoRepository: ITodoRepository) =>
      new UpdateTodoUsecase(todoRepository),
  },
  {
    inject: [ITodoRepository],
    provide: IUpdateTodoStatusUsecase,
    useFactory: (todoRepository: ITodoRepository) =>
      new UpdateTodoStatusUsecase(todoRepository),
  },
  {
    inject: [IAuthDatabaseDatasource],
    provide: IAuthRepository,
    useFactory: (authDatasource: IAuthDatabaseDatasource) =>
      new AuthRepository(authDatasource),
  },
  {
    inject: [IAuthRepository],
    provide: ILoginUsecase,
    useFactory: (authRepository: IAuthRepository) =>
      new LoginUsecase(authRepository),
  },
];

@Global()
@Module({})
export class UsecaseProvidersModule {
  static forRoot(): DynamicModule {
    return {
      imports: [MongoTodoDatasourceModule,  MongoAuthDatasourceModule],
      module: UsecaseProvidersModule,
      providers: [...PROVIDERS],
      exports: [...PROVIDERS],
    };
  }
}
