
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import StandardPage from "./StandardPage";

interface PrivateLayoutProps {
    children: ReactNode
}

const PrivateLayout = async ({ children }: PrivateLayoutProps) => {
    const session = await getServerSession(nextAuthOptions)

    if (!session) {
        redirect('/')
    }

    return (
        <>
            <StandardPage />
            <main>{children}</main>
        </>
    )
}

export default PrivateLayout;
