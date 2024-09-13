import { fetcher } from "@/core/config/fetcher";
import { Button } from "primereact/button";

export default async function Home() {
  const data = await fetcher.get("https://pokeapi.co/api/v2/pokemon/ditto");

  console.log(data);
  return (
    <div className="h-screen w-screen p-3 bg-slate-50 flex justify-center items-center flex-col">
      <Button label="Ir a ejemplo TODO" className="mb-3" />
      <Button label="Ir a ejemplo consumo API" />
    </div>
  );
}
