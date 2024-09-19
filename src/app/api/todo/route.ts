import {
  CreateTodoService,
  GetAllTodos,
} from "@/core/application/services/todo/todo.service";
import { CreateTodo } from "@/core/domain/entities/todo/todo.entity";

export async function POST(request: Request) {
  const todo: CreateTodo = await request.json();

  const data = await CreateTodoService(todo);

  return Response.json(data);
}

export async function GET() {
  const data = await GetAllTodos({ page: 1, limit: 100,  });

  return Response.json(data);
}
