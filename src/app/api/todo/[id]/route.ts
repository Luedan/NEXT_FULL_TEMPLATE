import { UpdateTodo } from "@/domain/entities/todo/todo.entity";
import { DeleteTodoService, GetTodoById, UpdateTodoService } from "@/services/todo/todo.service";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const { id } = params;

  const data = await GetTodoById(id);

  return Response.json(data);
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  const { id } = params;

  const todo: UpdateTodo = await req.json();

  const data = await UpdateTodoService(id, todo);

  return Response.json(data);
}

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  const { id } = params;

  const data = await DeleteTodoService(id);

  return Response.json(data);
}
