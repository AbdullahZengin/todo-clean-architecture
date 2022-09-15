import { Todo } from '@udao/presentation-core';
import { ITodoApiDatasource } from './datasources/api/todo-api-datasource.interface';
import { TodoRepository } from './todo.repository';

class MockDatasource implements ITodoApiDatasource {
  private storage: Todo[] = [];

  async getAllTodos(): Promise<Todo[]> {
    return this.storage;
  }

  async createTodo(todo: Todo): Promise<Todo> {
    this.storage.push(todo);

    return todo;
  }

  async updateTodo(todo: Todo): Promise<Todo> {
    const todoIndex = this._findTodoByIndex(todo.id);

    this.storage[todoIndex] = todo;

    return todo;
  }

  async deleteTodo(id: string): Promise<void> {
    this.storage = this.storage.filter((todo) => todo.id !== id);
  }

  async toggleTodoStatus(id: string): Promise<void> {
    const todoIndex = this._findTodoByIndex(id);

    this.storage[todoIndex].status = !this.storage[todoIndex].status;
  }

  private _findTodoByIndex(id: string): number {
    return this.storage.findIndex((_todo) => _todo.id === id);
  }
}

describe('TodoRepository', () => {
  let todoRepository: TodoRepository;
  let datasource: ITodoApiDatasource;

  let todos: Todo[];

  beforeEach(() => {
    datasource = new MockDatasource();
    todoRepository = new TodoRepository(datasource);
  });

  it('hlp me', () => {
    expect(todoRepository).toBeDefined();
  });
});
