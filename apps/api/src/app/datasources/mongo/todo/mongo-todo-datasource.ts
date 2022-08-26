import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '@udao/backend-core';
import { IDatabase } from '@udao/backend-data';
import { Model } from 'mongoose';
import { TodoDocument } from './interfaces/todo.interface';

export class MongoTodoDatasource implements IDatabase {
  constructor(
    @InjectModel('Todo') private readonly todoModel: Model<TodoDocument>
  ) {}

  getAll(): Promise<Todo[]> {
    return this.todoModel.find({}, { _id: 0 }).exec();
  }

  create(todo: Todo): Promise<Todo> {
    return this.todoModel.create(todo);
  }

  async delete(id: string): Promise<void> {
    await this.todoModel.deleteOne({ id }).exec();
  }

  async update(todo: Todo): Promise<Todo> {
    const result = await this.todoModel
      .updateOne({ id: todo.id }, { $set: { todo } })
      .exec();

    if (!result) {
      throw new Error('The data could not updated');
    }

    return todo;
  }
}
