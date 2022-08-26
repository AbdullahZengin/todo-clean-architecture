import { Injectable } from '@nestjs/common';
import { ICreateTodoUsecase, IGetAllTodosUseCase } from '@udao/backend-core';

@Injectable()
export class TodoService {
  constructor(
    private readonly createTodoUsecase: ICreateTodoUsecase,
    private readonly getAllTodoUsecase: IGetAllTodosUseCase
  ) {}

  async create() {
    // const result = await this.createTodoUsecase.execute({
    //   id: Math.random().toString().substring(2),
    //   body: 'Test Body',
    //   status: false,
    //   tag: 'test',
    //   createdDate: new Date(),
    // });
    // // const result = await this.getAllTodoUsecase.execute();
    // console.log(result);
  }
}
