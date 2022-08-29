import { IMapper } from '@udao/core';
import { Todo } from '@udao/backend-core';
import { CreateTodoDto, UpdateTodoDto } from '../dto/todo.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateTodoMapper implements IMapper<CreateTodoDto, Todo> {
  mapTo(input: CreateTodoDto): Todo {
    return { ...input, createdDate: new Date() };
  }
  mapFrom(output: Todo): CreateTodoDto {
    return { ...output };
  }
}

@Injectable()
export class UpdateTodoMapper implements IMapper<UpdateTodoDto, Partial<Todo>> {
  mapTo(input: UpdateTodoDto): Partial<Todo> {
    return { ...input };
  }
  mapFrom(output: Todo): UpdateTodoDto {
    return { ...output };
  }
}
