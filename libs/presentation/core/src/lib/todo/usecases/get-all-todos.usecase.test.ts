import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';
import {
  GetAllTodosUsecase,
  IGetAllTodosUsecase,
} from './get-all-todos.usecase';

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

class MockTodoRepository implements ITodoRepository {
  async getAllTodos(): Promise<Todo[]> {
    return todos;
  }
  createTodo(todo: Omit<Todo, 'createdDate'>): Promise<Todo> {
    throw new Error('Method not implemented.');
  }
  updateTodo(todo: Todo): Promise<Todo> {
    throw new Error('Method not implemented.');
  }
  deleteTodo(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  toggleTodoStatus(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

describe('Get all todo test', () => {
  let repository: ITodoRepository;
  let usecase: IGetAllTodosUsecase;

  beforeEach(() => {
    repository = new MockTodoRepository();
    usecase = new GetAllTodosUsecase(repository);
  });

  it('Get all todos', async () => {
    const allTodos: Todo[] = await usecase.execute();

    expect(allTodos).toBeDefined;
    expect(Array.isArray(allTodos)).toBeTruthy;

    expect(allTodos.length).toEqual(todos.length);

    for (let i = 0; i < todos.length; i++) {
      expect(allTodos[i].id).toBe(todos[i].id);
      expect(allTodos[i].body).toBe(todos[i].body);
      expect(allTodos[i].status).toBe(todos[i].status);
      expect(allTodos[i].tag).toBe(todos[i].tag);
    }
  });
});
