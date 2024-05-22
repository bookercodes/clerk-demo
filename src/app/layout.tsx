import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <header>
          <div>
            <Link href="/"><h1>Word Warehouse 📦</h1></Link>
            <Link href="/words">My words</Link>
          </div>
          <div>
          </div>
        </header>

        {children}

      </body>
    </html>
  );
}
