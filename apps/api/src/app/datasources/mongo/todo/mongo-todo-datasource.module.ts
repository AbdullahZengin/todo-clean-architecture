import { Module } from '@nestjs/common';
import { MongoTodoDatasource } from './mongo-todo-datasource';
import { ITodoDatasource } from '@udao/backend-data';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoSchema } from './schemas/todo.schema';

const databaseProvider = {
  provide: ITodoDatasource,
  useClass: MongoTodoDatasource,
};

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }])],
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class MongoTodoDatasourceModule {}
