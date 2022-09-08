import { Todo } from './entities/todo.entity';

export abstract class ITodoRepository {
  abstract getAllTodos(): Promise<Todo[]>;

  abstract createTodo(todo: Omit<Todo, 'createdDate'>): Promise<Todo>;

  abstract updateTodo(todo: Todo): Promise<Todo>;

  abstract toggleTodoStatus(id: string): Promise<void>;
}
