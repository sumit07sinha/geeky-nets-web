import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` min-h-screen  ${inter.className}`}
    >
      <header className="flex shadow-2xl border-b">
      <a
            className=" font-white text-[24px] lg:pointer-events-auto lg:p-2"
            href="/"
            target=""
            rel="noopener noreferrer"
          >
           GeekNets
           <sub className="font-white text-[8px]"> One Stop FrontEnd Destination</sub>
          </a>
        
      </header>
       
    </main>
  );
}
