import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Sidebar from "@/app/dashboard/_components/_sidebar/Sidebar";
import Navbar from "@/app/dashboard/_components/_navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen">
          <div className="hidden md:block lg:block lg:border-r lg:border-border md:bg-background md:border-r md:border-border lg:bg-background ">
            <Sidebar />
          </div>
          <section className="flex flex-col bg-accent w-full lg:p-3">
            <Navbar />
            <div className="p-3">{children}</div>
          </section>
        </main>
      </body>
    </html>
  );
}
