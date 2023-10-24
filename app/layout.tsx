import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "./compoents/Head";
const inter = Inter({ subsets: ["latin"] });

import SessionProvider from "./provider/SessionProvider";
export const metadata: Metadata = {
  title: "最全资源网",
  description: "各种资源",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <Head />
          <div className=" pt-16">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
