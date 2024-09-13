import React from "react";
import { Todo } from "@/core/domain/entities/todo/todo.entity";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Card } from "primereact/card";
import { ModalCreateTodo } from "./modalCreateTodo/ModalCreateTodo";

interface TodoListContainerProps {
  todos: Todo[];
}

export const TodoListContainer = ({ todos }: TodoListContainerProps) => {
  const columns = [
    { field: "id", header: "ID" },
    { field: "title", header: "Titulo" },
    { field: "completed", header: "Completado" },
  ];

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Card title={ModalCreateTodo}>
        <DataTable value={todos || []} tableStyle={{ minWidth: "50rem" }}>
          {columns.map((col) => (
            <Column
              key={col.field}
              field={col.field}
              header={col.header}
              sortable
            />
          ))}
        </DataTable>
      </Card>
    </div>
  );
};
