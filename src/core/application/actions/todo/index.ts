"use server";

import {
  todoFormSchema,
  todoSchema,
} from "@/app/todo/containers/modalCreateTodo/schema";
import { fetcher } from "@/core/config/fetcher";
import { URL_API } from "@/core/utils/constants/url";

export type FormState = {
  message: string;
};

export async function createTodoAction(
  data: todoFormSchema
): Promise<FormState> {
  const parsed = todoSchema.safeParse(data);

  if (!parsed.success) {
    return {
      message: "Invalid data",
    };
  }

  await fetcher.post(`${URL_API}/todo`, parsed.data);

  return { message: "Success" };
}
