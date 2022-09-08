import { Component, OnInit } from '@angular/core';

import {
  ICreateTodoUsecase,
  IGetAllTodosUsecase,
  IToggleTodoStatusUsecase,
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
    private createTodoUsecase: ICreateTodoUsecase
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

  setDone(id: string) {
    this.toggleTodoStatusUsecase.execute(id).then(() => {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.status = !todo.status;
      }
    });
  }
}
