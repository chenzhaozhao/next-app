/*
 * @Author: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @Date: 2023-10-23 13:58:50
 * @LastEditors: 陈朝朝60258 zhaozhao.chen@going-link.com
 * @LastEditTime: 2024-02-27 19:13:42
 * @FilePath: /next-app/app/provider/SessionProvider.tsx
 * @Description:provider
 */
"use client";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Head from "../compoents/Head";
function Index({ children }: { children: ReactNode }) {
  const pathName: string = usePathname();
  const isLoginPage: boolean = pathName.indexOf("login") >= 0;
  return (
    <SessionProvider>
      {isLoginPage ? (
        children
      ) : (
        <div className=" flex flex-col h-full">
          <Head />
          <div className=" flex-1 overflow-auto">{children}</div>
        </div>
      )}
    </SessionProvider>
  );
}

export default Index;
