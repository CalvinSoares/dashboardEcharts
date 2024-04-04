"use client"

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NextAuthSessionProviderProps {
    children: ReactNode
}

const NextAuthSessionProvider = ({ children }: NextAuthSessionProviderProps) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default NextAuthSessionProvider;
