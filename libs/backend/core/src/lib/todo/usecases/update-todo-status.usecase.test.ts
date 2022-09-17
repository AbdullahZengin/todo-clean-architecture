import {
  IUpdateTodoStatusUsecase,
  UpdateTodoStatusUsecase,
} from './update-todo-status.usecase';
import { ITodoRepository } from '../todo.repository.interface';
import { Todo } from '../entities/todo.entity';

const mockTodo: Todo = {
  id: '123',
  body: 'This is new todo',
  status: false,
  createdDate: new Date(Date.now()),
};

class MockTodoRepository implements ITodoRepository {
  getAll(): Promise<Todo[]> {
    throw new Error('Method not implemented.');
  }
  async getById(id: string): Promise<Todo> {
    return id === mockTodo.id ? { ...mockTodo } : (undefined as any);
  }
  create(todo: Todo): Promise<Todo> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async update(todo: Partial<Todo>): Promise<Todo> {
    return { ...mockTodo, ...todo };
  }
}

describe('Updates todo status usecase test', () => {
  let repository: ITodoRepository;
  let usecase: IUpdateTodoStatusUsecase;

  beforeEach(() => {
    repository = new MockTodoRepository();
    usecase = new UpdateTodoStatusUsecase(repository);
  });

  it('Update todo status with given id', async () => {
    const updatedTodo = await usecase.execute(mockTodo.id);

    expect(updatedTodo).toBeDefined();

    expect(updatedTodo.status).toEqual(!mockTodo.status);

    expect(updatedTodo.id).toEqual(mockTodo.id);
    expect(updatedTodo.body).toEqual(mockTodo.body);
    expect(updatedTodo.createdDate).toEqual(mockTodo.createdDate);
  });

  it('Update todo status with invalid id', async () => {
    const updateStatusExceptionTest = async () => {
      return await usecase.execute('invalid_id');
    };

    expect(updateStatusExceptionTest).rejects.toThrow('Todo could not found');
  });
});
