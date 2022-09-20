import { Todo } from '@udao/presentation-core';
import { ITodoApiDatasource } from './datasources/api/todo-api-datasource.interface';
import { TodoRepository } from './todo.repository';

const todos: Todo[] = [
  {
    id: '1',
    body: 'Foo',
    createdDate: new Date(Date.now()),
    status: true,
  },
  {
    id: '2',
    body: 'Foo',
    createdDate: new Date(Date.now()),
    status: true,
  },
  {
    id: '3',
    body: 'Foo',
    createdDate: new Date(Date.now()),
    status: true,
  },
  {
    id: '4',
    body: 'Foo',
    createdDate: new Date(Date.now()),
    status: false,
  },
];
class MockDatasource implements ITodoApiDatasource {
  private storage: Todo[] = todos;

  async getAllTodos(): Promise<Todo[]> {
    return this.storage;
  }

  async createTodo(todo: Todo): Promise<Todo> {
    this.storage.push(todo);

    return todo;
  }

  async updateTodo(todo: Todo): Promise<Todo> {
    const todoIndex = this._findTodoByIndex(todo.id);

    return (this.storage[todoIndex] = todo);
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

  beforeEach(() => {
    datasource = new MockDatasource();
    todoRepository = new TodoRepository(datasource);
  });

  it('Get all todo', async () => {
    const allTodo = await todoRepository.getAllTodos();

    expect(allTodo).toBeDefined();
    expect(Array.isArray(allTodo)).toBeTruthy();
    expect(allTodo.length).toBe(4);
  });

  it('Create todo', async () => {
    const todoToCreate: Todo = {
      id: '1',
      body: 'New todo',
      status: false,
      tag: 'tag 1',
      createdDate: new Date(Date.now()),
    };

    const createdTodo = await todoRepository.createTodo(todoToCreate);

    expect(createdTodo).toBeDefined();
    expect(Object.keys(createdTodo).length).toEqual(
      Object.keys(todoToCreate).length
    );
    expect(createdTodo).toEqual(todoToCreate);
  });

  it('Update todo', async () => {
    const todoToUpdate: Todo = {
      id: todos[0].id,
      body: 'Updated body',
      status: todos[0].status,
      createdDate: todos[0].createdDate,
    };

    const updatedTodo = await todoRepository.updateTodo(todoToUpdate);

    expect(updatedTodo).toBeDefined();
    expect(Object.keys(updatedTodo).length).toEqual(Object.keys(todoToUpdate).length);
    expect(updatedTodo).toEqual(todoToUpdate);
  });

  it('Toggle todo status', async () => {
    await expect(
      todoRepository.toggleTodoStatus(todos[0].id)
    ).resolves.not.toThrow();
  });

  it('Delete todo status', async () => {
    await expect(todoRepository.deleteTodo(todos[0].id)).resolves.not.toThrow();
  });
});
