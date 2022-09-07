import { Todo } from "./entities/todo.entity";

export abstract class ITodoRepository{
    abstract getAllTodos():Promise<Todo[]>
}