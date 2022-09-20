import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';
import { IUpdateTodoUsecase, UpdateTodoUsecase } from './update-todo.usecase';

const mockTodo: Todo = {
  id: '1',
  body: 'This is new todo',
  status: false,
  createdDate: new Date(Date.now()),
};

class MockTodoRepository implements ITodoRepository {
  getAllTodos(): Promise<Todo[]> {
    throw new Error('Method not implemented.');
  }
  createTodo(todo: Omit<Todo, 'createdDate'>): Promise<Todo> {
    throw new Error('Method not implemented.');
  }
  async updateTodo(todo: Todo): Promise<Todo> {
    return { ...mockTodo, ...todo };
  }
  deleteTodo(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  toggleTodoStatus(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

describe('Update todo test', () => {
  let repository: ITodoRepository;
  let usecase: IUpdateTodoUsecase;

  beforeEach(() => {
    repository = new MockTodoRepository();
    usecase = new UpdateTodoUsecase(repository);
  });

  it('Should update the given todo', async () => {
    const todo: Todo = {
      id: mockTodo.id,
      body: 'Update todo body',
      status: !mockTodo.status,
      createdDate: mockTodo.createdDate,
    };

    const updatedTodo = await usecase.execute(todo);

    expect(updatedTodo).toBeDefined();
    expect(Object.keys(updatedTodo).length).toEqual(
      Object.keys(mockTodo).length
    );

    expect(updatedTodo.body).toEqual(todo.body);
    expect(updatedTodo.status).toEqual(todo.status);

    expect(updatedTodo.id).toEqual(mockTodo.id);
    expect(updatedTodo.createdDate).toEqual(mockTodo.createdDate);
    expect(updatedTodo.tag).toEqual(mockTodo.tag);
  });
});
