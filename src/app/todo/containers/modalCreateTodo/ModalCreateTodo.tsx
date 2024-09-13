"use client";
import { useModal } from "@/common/hooks/useModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { todoFormSchema, todoSchema } from "./schema";
import { createTodoAction } from "@/core/application/actions/todo";
import { useFormState } from "react-dom";
import { useRef } from "react";

export const ModalCreateTodo = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const form = useForm<todoFormSchema>({
    resolver: zodResolver(todoSchema),
    mode: "onChange",
  });
  const [state, action, isPending] = useFormState(createTodoAction, {
    message: "",
    success: false,
  });

  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = (data: todoFormSchema) => {
    return formRef?.current?.submit();
  };

  return (
    <div className="card flex justify-content-center">
      <Button label="Crear Todo" onClick={openModal} />
      <Dialog
        header="Crear Todo"
        visible={isOpen}
        onHide={closeModal}
        style={{ width: "30vw" }}
        breakpoints={{ "960px": "55vw", "641px": "95vw" }}
        dismissableMask
      >
        <form
          ref={formRef}
          action={action}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputText
            type="text"
            className="p-inputtext-sm w-full"
            placeholder="Titulo"
            invalid={!!form.formState.errors.title}
            {...form.register("title")}
          />

          <Button
            label="Crear"
            size="small"
            className="mt-4 w-full"
            type="submit"
            disabled={isPending}
          />
        </form>
      </Dialog>
    </div>
  );
};
