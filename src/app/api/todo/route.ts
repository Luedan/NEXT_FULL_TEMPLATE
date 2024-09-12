import { CreateTodo } from "@/domain/entities/todo/todo.entity";
import { CreateTodoService, GetAllTodos } from "@/services/todo/todo.service";

export async function POST(request: Request) {
  const todo: CreateTodo = await request.json();

  const data = await CreateTodoService(todo);

  return Response.json(data);
}


export async function GET() {
    const data = await GetAllTodos();

    return Response.json(data);
}