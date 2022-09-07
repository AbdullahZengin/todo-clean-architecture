import { Component, OnInit } from '@angular/core';

import { IGetAllTodosUsecase, Todo } from '@udao/presentation-core';

@Component({
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  isLoading = true;
  todos: Todo[] = [];

  constructor(private getAllTodosUsecase: IGetAllTodosUsecase) {}

  ngOnInit(): void {
    this.getAllTodosUsecase.execute().then((loadedTodos) => {
      this.todos = loadedTodos;
      this.isLoading = false;
    });
  }

  setDone(todo: Todo) {
    console.log('Todo Updated');
  }
}
