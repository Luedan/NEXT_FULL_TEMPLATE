import { Button } from "primereact/button";
import React from "react";

export default function TodoListActionButton() {
  return (
    <div className="w-full flex justify-center items-center">
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger " size="small" />
    </div>
  );
}
