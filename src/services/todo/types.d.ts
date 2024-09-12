import { UpdateTodo } from "../../domain/entities/todo/todo.entity";

export interface IUpdateTodoService {
  id: string;
  todo: UpdateTodo;
}
