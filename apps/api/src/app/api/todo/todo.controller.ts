import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  CREATE_TODO_URL,
  DELETE_TODO_URL,
  GET_ALL_TODOS_URL,
  TODO_API_ROOT,
  UPDATE_TODO_URL,
} from '@udao/api-interface';
import { TodoService } from './todo.service';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import { Todo } from '@udao/backend-core';

@Controller(TODO_API_ROOT)
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get(GET_ALL_TODOS_URL.def)
  getAll(): Promise<Todo[]> {
    return this.todoService.getAll();
  }

  @Post(CREATE_TODO_URL.def)
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    return this.todoService.create(createTodoDto);
  }

  @Put(UPDATE_TODO_URL.def)
  update(@Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoService.update(updateTodoDto);
  }

  @Delete(DELETE_TODO_URL.def)
  delete(@Param('id') id: string): Promise<void> {
    return this.todoService.delete(id);
  }
}
