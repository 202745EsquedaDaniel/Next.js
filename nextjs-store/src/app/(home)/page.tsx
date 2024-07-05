import { Description } from "../../components/home/Description";
import { Hero } from "../../components/home/Hero";
import { MainProducts } from "../../components/home/MainProducts";
import '../globals.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MainProducts />
    </main>
  );
}
