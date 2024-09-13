"use server";

import { todoSchema } from "@/app/todo/containers/modalCreateTodo/schema";
import { fetcher } from "@/core/config/fetcher";
import { URL_API } from "@/core/utils/constants/url";
import { revalidatePath } from "next/cache";

export type FormState = {
  message: string;
  success?: boolean;
};

export async function createTodoAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const data = Object.fromEntries(formData.entries());
  const parsed = todoSchema.safeParse(data);
  console.log(parsed);
  if (!parsed.success) {
    return {
      message: "Invalid data",
      success: false,
    };
  }

  await fetcher.post(`${URL_API}/todo`, { ...parsed.data, completed: false });

  revalidatePath("/todo");

  return { message: "Success", success: true };
}
