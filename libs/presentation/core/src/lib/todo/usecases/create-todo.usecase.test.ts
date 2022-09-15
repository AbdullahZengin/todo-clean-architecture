import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';
import { CreateTodoUsecase } from './create-todo.usecase';

class MockRepository implements ITodoRepository {
  getAllTodos(): Promise<Todo[]> {
    throw new Error('Method not implemented.');
  }

  async createTodo(todo: Omit<Todo, 'createdDate'>): Promise<Todo> {
    return {
      id: todo.id,
      body: todo.body,
      status: todo.status,
      createdDate: new Date(Date.now()),
    };
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

describe('CreateTodoUsecase', () => {
  let usecase: CreateTodoUsecase;
  let repository: ITodoRepository;

  beforeEach(() => {
    repository = new MockRepository();
    usecase = new CreateTodoUsecase(repository);
  });

  it('Creates a todo', async () => {
    const newTodo = await usecase.execute('Hello Todo');

    expect(newTodo).toBeDefined();

    expect(newTodo.id).toBeDefined();
    expect(newTodo.body).toEqual('Hello Todo');
    expect(newTodo.status).toEqual(false);
  });
});
