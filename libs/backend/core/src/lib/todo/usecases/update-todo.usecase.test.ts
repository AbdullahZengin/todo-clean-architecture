import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';
import { IUpdateTodoUsecase, UpdateTodoUsecase } from './update-todo.usecase';

const mockTodo: Todo = {
  id: '123',
  body: 'mocking todo body',
  tag: 'test-tag',
  status: false,
  createdDate: new Date(),
};

class MockTodoRepository implements ITodoRepository {
  getAll(): Promise<Todo[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<Todo> {
    throw new Error('Method not implemented.');
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

describe('Update todo usecase tests', () => {
  let repository: ITodoRepository;
  let usecase: IUpdateTodoUsecase;

  beforeEach(() => {
    repository = new MockTodoRepository();
    usecase = new UpdateTodoUsecase(repository);
  });

  it('Should update the given todo', async () => {
    const partialTodoToUpdate: Partial<Todo> = {
      id: mockTodo.id,
      body: 'updated todo body',
      status: !mockTodo.status,
    };

    const updateTodoResult = await usecase.execute(partialTodoToUpdate);

    expect(updateTodoResult).toBeDefined();
    expect(Object.keys(updateTodoResult).length).toEqual(
      Object.keys(mockTodo).length
    );

    expect(updateTodoResult.body).toEqual(partialTodoToUpdate.body);
    expect(updateTodoResult.status).toEqual(partialTodoToUpdate.status);

    expect(updateTodoResult.id).toEqual(mockTodo.id);
    expect(updateTodoResult.createdDate).toEqual(mockTodo.createdDate);
    expect(updateTodoResult.tag).toEqual(mockTodo.tag);
  });
});
