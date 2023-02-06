import Image from "next/image";
import { Plus_Jakarta_Sans } from "@next/font/google";
import { Button } from "ui";
// import "./globals.css";

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <p className={inter.className}>Hi</p>
      <p className="text-5xl">hello</p>
      <Button></Button>
    </main>
  );
}
