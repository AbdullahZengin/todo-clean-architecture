import { Todo } from '../entities/todo.entity';
import { FilterTodosByStatusUsecase } from './filter-todos-by-status.usecase';
describe('FilterTodoByStatusUsecase', () => {
  let usecase: FilterTodosByStatusUsecase;

  let todos: Todo[];

  beforeEach(() => {
    usecase = new FilterTodosByStatusUsecase();

    todos = [
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
  });

  it('Returns todos with status true', async () => {
    const filteredTodos = await usecase.execute(todos, true);

    filteredTodos.forEach((todo) => {
      expect(todo.status).toBe(true);
    });

    expect(filteredTodos.length).toEqual(
      todos.filter((todo) => todo.status === true).length
    );
  });

  it('Returns todos with status false', async () => {
    const filteredTodos = await usecase.execute(todos, false);

    filteredTodos.forEach((todo) => {
      expect(todo.status).toBe(false);
    });

    expect(filteredTodos.length).toEqual(
      todos.filter((todo) => todo.status === false).length
    );
  });
});
