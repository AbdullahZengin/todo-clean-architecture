import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TodoEndpoints } from '@udao/api-interface';
import { Todo } from '@udao/backend-core';

import { TodoService } from './todo.service';

import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';

@Controller(TodoEndpoints.ROOT)
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get(TodoEndpoints.GET_ALL_TODOS.def)
  getAll(): Promise<Todo[]> {
    return this.todoService.getAll();
  }

  @Post(TodoEndpoints.CREATE_TODO.def)
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Put(TodoEndpoints.UPDATE_TODO.def)
  update(@Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoService.update(updateTodoDto);
  }

  @Delete(TodoEndpoints.DELETE_TODO.def)
  delete(@Param('id') id: string): Promise<void> {
    return this.todoService.delete(id);
  }

  @Put(TodoEndpoints.UPDATE_TODO_STATUS.def)
  updateTodoStatus(@Param('id') id: string) {
    return this.todoService.updateTodoStatus(id);
  }
}
