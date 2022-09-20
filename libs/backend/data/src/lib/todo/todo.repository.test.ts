
import { ITodoRepository, Todo } from '@udao/backend-core';
import { ITodoDatasource } from './datasources/database.interface';
import { TodoRepository } from './todo.repository';

let todos: Todo[] = [
  {
    id: '1',
    body: 'This is first todo',
    status: false,
    tag: 'First_tag',
    createdDate: new Date(Date.now()),
  },
  {
    id: '2',
    body: 'This is second todo',
    status: false,
    tag: 'Second_tag',
    createdDate: new Date(Date.now()),
  },
  {
    id: '3',
    body: 'This is third todo',
    status: true,
    tag: 'Third_tag',
    createdDate: new Date(Date.now()),
  },
];

class MockTodoRepository implements ITodoDatasource {
  async getAll(): Promise<Todo[]> {
    return todos;
  }

  async getById(id: string): Promise<Todo> {
    return todos.find((todo) => todo.id === id)
      ? todos[todos.findIndex((todo) => todo.id === id)]
      : (undefined as any);
  }

  async create(todo: Todo): Promise<Todo> {
    return { ...todo };
  }

  async delete(id: string): Promise<void> {
    const todoToDelete = await this.getById(id);
    todos = todos.filter((todo) => todo.id !== todoToDelete.id);
  }

  async update(todo: Todo): Promise<Todo> {
    return {
      ...todos[todos.findIndex((todos) => todos.id === todo.id)],
      ...todo,
    };
  }
}

describe('Todo Repository Test', () => {
  let todoRepository: ITodoRepository
  let mockTodoDatasource: ITodoDatasource;

  beforeEach(() => {
    mockTodoDatasource = new MockTodoRepository();
    todoRepository = new TodoRepository(mockTodoDatasource);
  });

  it('Returns all todos', async () => {
    const allTodos = await todoRepository.getAll();

    expect(allTodos).toBeDefined();

    expect(Array.isArray(allTodos)).toBeTruthy;

    expect(allTodos.length).toBe(todos.length);

    for (let index = 0; index < todos.length; index++) {
      expect(allTodos[index].id).toBe(todos[index].id);
      expect(allTodos[index].body).toBe(todos[index].body);
      expect(allTodos[index].status).toBe(todos[index].status);
      expect(allTodos[index].tag).toBe(todos[index].tag);
    }
  });

  it('Finds a todo with given id', async () => {
    const id = '1';

    const todo: Todo = await todoRepository.getById(id);

    expect(todo).toBeDefined();
    expect(todos.includes(todo)).toBeTruthy();
  });

  it('Gets undefined type when id is invalid', async () => {
    const invalidId = '123';

    const todo: Todo = await todoRepository.getById(invalidId);

    expect(todo).toBeUndefined();
    expect(todos.includes(todo)).toBeFalsy();
  });

  it('Creates a new todo and push it to todo list', async () => {
    const todoToCreate: Todo = {
      id: '4',
      body: 'This is fourth todo',
      status: false,
      tag: 'Fourth_tag',
      createdDate: new Date(Date.now()),
    };

    const createdTodo = await todoRepository.create(todoToCreate);
    expect(createdTodo).toBeDefined();
    expect(Object.keys(createdTodo).length).toBe(
      Object.keys(todoToCreate).length
    );
    expect(createdTodo).toEqual(todoToCreate);
  });

  it('Deletes a todo with given id', async () => {
    await expect(todoRepository.delete('1')).resolves.not.toThrow();
  });

  it('Updates todo', async () => {
    const todoToUpdate: Todo = {
      id: '1',
      body: 'This is updated todo',
      status: false,
      tag: 'updated_tag',
      createdDate: new Date(Date.now()),
    };
    const updatedTodo = await todoRepository.update(todoToUpdate);

    expect(Object.keys(updatedTodo).length).toBe(
        Object.keys(todoToUpdate).length
      );
      expect(updatedTodo).toEqual(todoToUpdate);
    
  });




});
