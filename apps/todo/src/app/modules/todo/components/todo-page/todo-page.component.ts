import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  ICreateTodoUsecase,
  IDeleteTodoUsecase,
  IGetAllTodosUsecase,
  ILogoutUsecase,
  IToggleTodoStatusUsecase,
  IUpdateTodoUsecase,
  Todo,
} from '@udao/presentation-core';

import { FilterTodosByBodyPipe } from '../../pipes/filter-todos-by-body.pipe';
import { FilterTodosByStatusPipe } from '../../pipes/filter-todos-by-status.pipe';

@Component({
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
})
export class TodoPageComponent implements OnInit {
  isLoading = true;

  private todos: Todo[] = [];
  filteredTodos: Todo[] = [];

  bodyFilterValue = '';
  statusFilterValue?: boolean;

  constructor(
    private router: Router,

    private getAllTodosUsecase: IGetAllTodosUsecase,
    private toggleTodoStatusUsecase: IToggleTodoStatusUsecase,
    private createTodoUsecase: ICreateTodoUsecase,
    private updateTodoUsecase: IUpdateTodoUsecase,
    private deleteTodoUsecase: IDeleteTodoUsecase,
    private logoutUsecase: ILogoutUsecase,

    private filterByBodyPipe: FilterTodosByBodyPipe,
    private filterByStatusPipe: FilterTodosByStatusPipe
  ) {}

  ngOnInit(): void {
    this.getAllTodosUsecase.execute().then((loadedTodos) => {
      this.todos = loadedTodos;
      this.filteredTodos = this.todos;
      this.isLoading = false;
    });
  }

  addTodo(body: string) {
    this.createTodoUsecase.execute(body).then((todo) => {
      this._addTodoLocally(todo);
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
      this._deleteTodoLocally(id);
    });
  }

  async logout() {
    await this.logoutUsecase.execute();
    this.router.navigate(['/login']);
  }

  async filter(body: string, status: boolean | undefined): Promise<void> {
    const filteredByBody = await this.filterByBodyPipe.transform(
      this.todos,
      body
    );

    const filteredByBodyAndStatus = await this.filterByStatusPipe.transform(
      filteredByBody,
      status
    );

    this.filteredTodos = filteredByBodyAndStatus;
  }

  private _addTodoLocally(todo: Todo) {
    this.todos.push(todo);

    this.filter(this.bodyFilterValue, this.statusFilterValue);
  }

  private _deleteTodoLocally(todoId: string) {
    const deleteTodoIndex = this.todos.findIndex((todo) => todo.id === todoId);

    if (deleteTodoIndex !== -1) {
      this.todos.splice(deleteTodoIndex, 1);
    }

    this.filter(this.bodyFilterValue, this.statusFilterValue);
  }
}
