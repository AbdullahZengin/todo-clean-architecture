import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('api/todo')
export class TodoController {
  constructor(private todoService: TodoService) {
    todoService.create();
  }
}
