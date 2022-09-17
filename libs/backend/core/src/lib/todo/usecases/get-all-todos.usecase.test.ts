import { GetAllTodosUsecase } from './get-all-todos.usecase';
import { ITodoRepository } from '../todo.repository.interface';
import { Todo } from '../entities/todo.entity';

const todos: Todo[] = [
  {
    id: '1',
    body: 'first todo',
    status: false,
    tag: 'no_tag',
    createdDate: new Date(Date.now()),
  },

  {
    id: '2',
    body: 'second todo',
    status: false,
    tag: 'no_tag',
    createdDate: new Date(Date.now()),
  },
  {
    id: '3',
    body: 'third todo',
    status: true,
    tag: 'no_tag',
    createdDate: new Date(Date.now()),
  },
];

class MockTodoRepository implements ITodoRepository {
  async getAll(): Promise<Todo[]> {
    return await todos;
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
  update(todo: Partial<Todo>): Promise<Todo> {
    throw new Error('Method not implemented.');
  }
}

describe('Gets all todos usecase test', () => {
  let repository: ITodoRepository;
  let usecase: GetAllTodosUsecase;

  beforeEach(() => {
    repository = new MockTodoRepository();
    usecase = new GetAllTodosUsecase(repository);
  });

  it('Gets all todos', async () => {
    const allTodos: Todo[] = await usecase.execute();

    expect(allTodos).toBeDefined;
    
    for (let index = 0; index < todos.length; index++) {
        expect(allTodos[index].id).toBe(todos[index].id);
        expect(allTodos[index].body).toBe(todos[index].body);
        expect(allTodos[index].status).toBe(todos[index].status);
        expect(allTodos[index].tag).toBe(todos[index].tag);
    }

  });
});
