import { Component, OnInit } from '@angular/core';
import { IUpdateTodoStatusUsecase } from '@udao/backend-core';

import {
  ICreateTodoUsecase,
  IDeleteTodoUsecase,
  IGetAllTodosUsecase,
  IToggleTodoStatusUsecase,
  IUpdateTodoUsecase,
  Todo,
} from '@udao/presentation-core';

@Component({
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  isLoading = true;
  todos: Todo[] = [];

  constructor(
    private getAllTodosUsecase: IGetAllTodosUsecase,
    private toggleTodoStatusUsecase: IToggleTodoStatusUsecase,
    private createTodoUsecase: ICreateTodoUsecase,
    private updateTodoUsecase: IUpdateTodoUsecase,
    private deleteTodoUsecase: IDeleteTodoUsecase
  ) {}

  ngOnInit(): void {
    this.getAllTodosUsecase.execute().then((loadedTodos) => {
      this.todos = loadedTodos;
      this.isLoading = false;
    });
  }

  addTodo(body: string) {
    this.createTodoUsecase.execute(body).then((todo) => {
      this.todos.push(todo);
    });
  }

  updateTodo(todoToUpdate: Todo, body: string) {
    this.updateTodoUsecase.execute({ ...todoToUpdate, body }).then(() => {
      const updateTodo = this.todos.find((todo) => todo.id === todoToUpdate.id);
      if (updateTodo) {
        updateTodo.body = body;
      }
    });
  }

  setDone(id: string) {
    this.toggleTodoStatusUsecase.execute(id).then(() => {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.status = !todo.status;
      }
    });
  }

  deleteTodo(id: string) {
    this.deleteTodoUsecase.execute(id).then(() => {
      const deleteTodoIndex = this.todos.findIndex((todo) => todo.id === id);
      if (deleteTodoIndex !== -1) {
        this.todos.splice(deleteTodoIndex, 1);
      }
    });
  }
}
