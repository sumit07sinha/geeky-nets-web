import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` min-h-screen  ${inter.className}`}
    >
         <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/"
            target=""
            rel="noopener noreferrer"
          >
            <Image
              src="/geeky-net-logo.svg"
              alt="Geeky Net Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
    </main>
  );
}
