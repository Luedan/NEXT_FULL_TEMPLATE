"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function Home() {
  return (
    <div className="h-screen w-screen p-3 bg-red-50 flex justify-center items-center">
      <Button label="Click" />

      <FloatLabel>
        <InputText id="username" className="p-inputtext-sm"/>
        <label htmlFor="username">Username</label>
      </FloatLabel>
    </div>
  );
}
