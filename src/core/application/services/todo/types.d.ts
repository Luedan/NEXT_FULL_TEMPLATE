import { UpdateTodo } from "../../core/domain/entities/todo/todo.entity";

export interface IUpdateTodoService {
  id: string;
  todo: UpdateTodo;
}
