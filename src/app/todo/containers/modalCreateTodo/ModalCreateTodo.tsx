"use client";
import { useModal } from "@/common/hooks/useModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { todoFormSchema, todoSchema } from "./schema";
import { createTodoAction } from "@/core/application/actions/todo";

export const ModalCreateTodo = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const form = useForm<todoFormSchema>({ resolver: zodResolver(todoSchema) });

  const onSubmit = async (data: todoFormSchema) => {
    const res = await createTodoAction(data);

    console.log(res);
  };

  return (
    <div className="card flex justify-content-center">
      <Button
        label="Crear Todo"
        icon="pi pi-external-link"
        onClick={openModal}
      />
      <Dialog
        header="Crear Todo"
        visible={isOpen}
        onHide={closeModal}
        style={{ width: "30vw" }}
        breakpoints={{ "960px": "55vw", "641px": "95vw" }}
      >
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputText
            type="text"
            className="p-inputtext-sm w-full"
            placeholder="Titulo"
            {...form.register("title")}
          />

          <Button
            label="Crear"
            icon="pi pi-external-link"
            size="small"
            className="mt-4 w-full"
            type="submit"
          />
        </form>
      </Dialog>
    </div>
  );
};
