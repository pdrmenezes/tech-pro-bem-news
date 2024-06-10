import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Pro Bem News",
  description: "Notícias de uma parte do mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} max-w-screen-xl mx-auto antialiased`}
      >
        <nav className="flex justify-between px-10 py-6">
          <Link href={"/"}>
            <Image
              className="w-10 h-10 outline-none ring-transparent hover:scale-105 transition-transform"
              src="/planet-icon.svg"
              alt="Planet Logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex gap-4">
            <a
              className="rounded-md px-4 py-2 bg-transparent outline outline-neutral-100 hover:bg-neutral-100 transition-colors hover:text-neutral-900"
              href="https://techprobem.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tech Pro Bem
            </a>
            <a
              className="rounded-md px-4 py-2 bg-transparent outline outline-neutral-100 hover:bg-neutral-100 transition-colors hover:text-neutral-900"
              href="https://spaceflightnewsapi.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spacetravel API
            </a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
