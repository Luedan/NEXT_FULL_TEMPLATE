import Link from "next/link";
import { Button } from "primereact/button";

export default async function Home() {
  return (
    <div className="h-screen w-screen p-3 bg-slate-50 flex justify-center items-center flex-col">
      <Link href="/todo">
        <Button label="Ir a ejemplo TODO" className="mb-3" />
      </Link>
    </div>
  );
}
