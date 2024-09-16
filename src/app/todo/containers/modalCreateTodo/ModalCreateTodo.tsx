"use client";
import { useModal } from "@/common/hooks/useModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { todoFormSchema, todoSchema } from "./schema";
import { useLazyApi } from "@/common/hooks/useApi";
import { createTodoAction } from "@/core/application/actions/todo/todo.actions";
import { toast } from "react-toastify";

export const ModalCreateTodo = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const [createTodo, { loading }] = useLazyApi(createTodoAction);

  const form = useForm<todoFormSchema>({
    resolver: zodResolver(todoSchema),
    mode: "onChange",
  });

  const onSubmit = (data: todoFormSchema) => {
    createTodo(data, {
      onSuccess() {
        form.reset({ title: "" });
        closeModal();
        toast.success("Todo creado");
      },
    });
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
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
            loading={loading}
            disabled={loading}
          />
        </form>
      </Dialog>
    </div>
  );
};
