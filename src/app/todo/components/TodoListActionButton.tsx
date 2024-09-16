"use client";
import { useLazyApi } from "@/common/hooks/useApi";
import {
  completeTodoAction,
  deleteTodoAction,
} from "@/core/application/actions/todo/todo.actions";
import { Todo } from "@/core/domain/entities/todo/todo.entity";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import React from "react";
import { toast } from "react-toastify";

export function TodoListActionButton({ id }: { id: string }) {
  const [deleteTodo, { loading }] = useLazyApi(deleteTodoAction);
  return (
    <div className="w-full flex justify-center items-center">
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-danger "
        size="small"
        loading={loading}
        disabled={loading}
        onClick={() =>
          deleteTodo(id, { onSuccess: () => toast.success("Todo eliminado") })
        }
      />
    </div>
  );
}

export const TodoCompletedButton = ({ row }: { row: Todo }) => {
  const [completeTodo, { loading }] = useLazyApi(completeTodoAction);

  return (
    <>
      <InputSwitch
        checked={row?.completed || false}
        onChange={() =>
          completeTodo({ id: row?.id, completed: !row.completed })
        }
        disabled={loading}
      />
    </>
  );
};
