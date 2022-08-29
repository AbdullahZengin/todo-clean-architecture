import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { CreateTodoMapper, UpdateTodoMapper } from './mapper/todo.mapper';

@Module({
  controllers: [TodoController],
  providers: [TodoService, CreateTodoMapper, UpdateTodoMapper],
})
export class TodoModule {}
