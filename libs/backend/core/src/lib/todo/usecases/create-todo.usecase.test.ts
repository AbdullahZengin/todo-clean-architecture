import { Todo } from '../entities/todo.entity';
import { ITodoRepository } from '../todo.repository.interface';
import { CreateTodoUsecase, ICreateTodoUsecase } from './create-todo.usecase';

const todoToCreate: Todo = {
  id: '123',
  body: 'This is new todo',
  status: false,
  tag: 'this_is_tag',
  createdDate: new Date(Date.now()),
};

class MockTodoRepository implements ITodoRepository {
  getAll(): Promise<Todo[]> {
    throw new Error('Method not implemented.');
  }
  getById(id: string): Promise<Todo> {
    throw new Error('Method not implemented.');
  }
  async create(todo: Todo): Promise<Todo> {
    return {
      id: todo.id,
      body: todo.body,
      status: todo.status,
      tag: todo.id,
      createdDate: todo.createdDate,
    };
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(todo: Partial<Todo>): Promise<Todo> {
    throw new Error('Method not implemented.');
  }
}

describe('Create todo usecase test', () => {
  let repository: ITodoRepository;
  let usecase: ICreateTodoUsecase;

  beforeEach(() => {
    repository = new MockTodoRepository();
    usecase = new CreateTodoUsecase(repository);
  });

  it('Creates a todo', async () => {
    const createdTodo = await usecase.execute(todoToCreate);

    expect(createdTodo).toBeDefined();

    expect(createdTodo.id).toEqual(todoToCreate.id);
    expect(createdTodo.body).toEqual(todoToCreate.body);
    expect(createdTodo.tag).toEqual(todoToCreate.tag);
    expect(createdTodo.status).toEqual(todoToCreate.status);
    expect(createdTodo.createdDate).toEqual(todoToCreate.createdDate);
    
   });
});
