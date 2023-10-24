"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
function Index({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}

export default Index;
