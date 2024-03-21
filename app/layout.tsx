import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/app/providers";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nextjs Turso Drizzle Template",
  description:
    "A template of Next.Js with Drizzle ORM and Turso DB to get started",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark text-foreground bg-background`}>
        <Providers>
          <NavBar />
          <main className="flex min-h-screen justify-center items-center p-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
