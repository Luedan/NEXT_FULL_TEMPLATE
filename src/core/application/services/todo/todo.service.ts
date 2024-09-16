import { appContext } from "@/core/config/database/app_context";
import {
  CreateTodo,
  Todo,
  UpdateTodo,
} from "@/core/domain/entities/todo/todo.entity";

export async function CreateTodoService(todo: CreateTodo): Promise<Todo> {
  try {
    const data = await appContext.todo.create({
      data: { ...todo },
    });

    return data;
  } catch (error: any) {
    throw new Error(
      error?.message || "Algo salio mal creando un todo",
      error?.code || 500
    );
  }
}

export async function GetAllTodos(): Promise<Todo[]> {
  try {
    const data = await appContext.todo.findMany({ orderBy: { id: "asc" } });

    return data;
  } catch (error: any) {
    throw new Error(
      error?.message || "Algo salio mal obteniendo todos los todos",
      error?.code || 500
    );
  }
}

export async function GetTodoById(id: string): Promise<Todo> {
  try {
    const data = await appContext.todo.findUnique({ where: { id } });

    if (!data) {
      throw new Error("Todo no encontrado");
    }

    return data;
  } catch (error: any) {
    throw new Error(
      error?.message || "Algo salio mal obteniendo un todo",
      error?.code || 500
    );
  }
}

export async function UpdateTodoService(
  id: string,
  todo: UpdateTodo
): Promise<Todo> {
  try {
    const todoExist = await GetTodoById(id);

    const data = await appContext.todo.update({
      where: { id },
      data: { ...todoExist, ...todo },
    });

    return data;
  } catch (error: any) {
    throw new Error(
      error?.message || "Algo salio mal actualizando un todo",
      error?.code || 500
    );
  }
}

export async function DeleteTodoService(id: string): Promise<Todo> {
  try {
    await GetTodoById(id);

    const data = await appContext.todo.delete({ where: { id } });

    return data;
  } catch (error: any) {
    throw new Error(
      error?.message || "Algo salio mal eliminando un todo",
      error?.code || 500
    );
  }
}
