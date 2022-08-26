import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { IDatabase, TodoRepository } from '@udao/backend-data';
import { MongoTodoDatasourceModule } from '../datasources/mongo/todo/mongo-todo-datasource.module';
import {
  CreateTodoUsecase,
  GetAllTodosUsecase,
  ICreateTodoUsecase,
  IGetAllTodosUseCase,
  ITodoRepository,
} from '@udao/backend-core';

export const PROVIDERS: Provider[] = [
  {
    inject: [IDatabase],
    provide: ITodoRepository,
    useFactory: (database: IDatabase) => {
      return new TodoRepository(database);
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
    provide: IGetAllTodosUseCase,
    useFactory: (todoRepository: ITodoRepository) =>
      new GetAllTodosUsecase(todoRepository),
  },
];

@Global()
@Module({})
export class UsecaseProvidersModule {
  static forRoot(): DynamicModule {
    return {
      imports: [MongoTodoDatasourceModule],
      module: UsecaseProvidersModule,
      providers: [...PROVIDERS],
      exports: [...PROVIDERS],
    };
  }
}
