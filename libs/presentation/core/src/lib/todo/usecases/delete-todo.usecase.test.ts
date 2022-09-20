import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';
import { DeleteTodoUsecase, IDeleteTodoUsecase } from './delete-todo.usecase';

const mockTodo: Todo[] = [
  {
    id: '1',
    body: 'This is new todo',
    status: false,
    createdDate: new Date(Date.now()),
  },
  {
    id: '2',
    body: 'This is new todo',
    status: false,
    createdDate: new Date(Date.now()),
  },
  {
    id: '3',
    body: 'This is new todo',
    status: false,
    createdDate: new Date(Date.now()),
  },
];

class MockTodoRepository implements ITodoRepository {
  getAllTodos(): Promise<Todo[]> {
    throw new Error('Method not implemented.');
  }
  createTodo(todo: Omit<Todo, 'createdDate'>): Promise<Todo> {
    throw new Error('Method not implemented.');
  }
  updateTodo(todo: Todo): Promise<Todo> {
    throw new Error('Method not implemented.');
  }
  async deleteTodo(id: string): Promise<void> {
    const todo = mockTodo.find((todo) => todo.id === id);
    if (todo === undefined) {
      throw new Error('Error');
    }
  }
  toggleTodoStatus(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

describe('Delete todo test', () => {
  let repository: ITodoRepository;
  let usecase: IDeleteTodoUsecase;

  beforeEach(() => {
    repository = new MockTodoRepository();
    usecase = new DeleteTodoUsecase(repository);
  });

  it('Delete todo with given id', async () => {
    await expect(usecase.execute(mockTodo[0].id)).resolves.not.toThrow();

  });

  it('Delete todo with invalid id', async () => {
    await expect(usecase.execute('invalid_id')).rejects.toThrow();
  });
});
