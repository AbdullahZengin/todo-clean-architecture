import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateTodoDto, UpdateTodoDto } from './dto/todo.dto';
import { CreateTodoMapper, UpdateTodoMapper } from './mapper/todo.mapper';
import {
  GetAllTodosUsecase,
  ICreateTodoUsecase,
  IDeleteTodoUsecase,
  IGetAllTodosUsecase,
  IUpdateTodoUsecase,
} from '@udao/backend-core';

@Injectable()
export class TodoService {
  constructor(
    private createTodoMapper: CreateTodoMapper,
    private updateTodoMapper: UpdateTodoMapper,
    private readonly createTodoUsecase: ICreateTodoUsecase,
    private readonly getAllTodoUsecase: IGetAllTodosUsecase,
    private readonly deleteTodoUsecase: IDeleteTodoUsecase,
    private readonly updateTodoUsecase: IUpdateTodoUsecase
  ) {}

  getAll() {
    return this.getAllTodoUsecase.execute();
  }

  create(createTodoDto: CreateTodoDto) {
    return this.createTodoUsecase
      .execute(this.createTodoMapper.mapTo(createTodoDto))
      .catch((e: unknown) => {
        if (e instanceof Error) {
          if (e.message.includes('E11000')) {
            throw new BadRequestException('A todo with this id already exist.');
          }
        }
        throw new InternalServerErrorException('Todo could not created.');
      });
  }

  delete(id: string) {
    return this.deleteTodoUsecase.execute(id);
  }

  async update(updateTodoDto: UpdateTodoDto) {
    return this.updateTodoUsecase.execute(
      this.updateTodoMapper.mapTo(updateTodoDto)
    );
  }
}
