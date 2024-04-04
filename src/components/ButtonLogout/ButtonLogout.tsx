"use client"

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


const ButtonLogout = () => {
    const router = useRouter()

    const logout = async () => {
      await signOut({
        redirect: false
      })

      router.replace('/')
    }

    return <button onClick={logout} className="p-2 w-40 border border-gray-300 rounded-md">Sair</button>
}

export default ButtonLogout;
