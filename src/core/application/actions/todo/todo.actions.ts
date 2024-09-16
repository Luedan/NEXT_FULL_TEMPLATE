"use server";

import { todoFormSchema } from "@/app/todo/containers/modalCreateTodo/schema";
import { fetcher } from "@/core/config/fetcher";
import {
  CreateTodo,
  Todo,
  UpdateTodo,
} from "@/core/domain/entities/todo/todo.entity";
import { URL_API } from "@/core/utils/constants/url";
import { revalidatePath } from "next/cache";

export async function createTodoAction(
  todoRequest: todoFormSchema
): Promise<Todo> {
  const data = await fetcher.post<Todo, CreateTodo>(`${URL_API}/todo`, {
    ...todoRequest,
    completed: false,
  });

  revalidatePath("/todo");

  return data;
}

export async function deleteTodoAction(id: string): Promise<Todo> {
  const data = await fetcher.delete<Todo>(`${URL_API}/todo/${id}`);

  revalidatePath("/todo");

  return data;
}

export async function completeTodoAction({
  id,
  completed,
}: {
  id: string;
  completed: boolean;
}): Promise<Todo> {
  const data = await fetcher.put<Todo, UpdateTodo>(`${URL_API}/todo/${id}`, {
    completed,
  });

  revalidatePath("/todo");

  return data;
}
