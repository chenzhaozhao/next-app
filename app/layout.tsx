/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2024-01-23 15:55:04
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-01-25 09:10:15
 * @FilePath: /next-app/app/layout.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SessionProvider from "./provider/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI资源网",
  description: "chatgtp、AI、绘画",
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
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
