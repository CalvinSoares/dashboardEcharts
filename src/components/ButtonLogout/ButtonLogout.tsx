"use client"

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";


const ButtonLogout = () => {
    const router = useRouter()

    const logout = async () => {
      await signOut({
        redirect: false
      })
      localStorage.removeItem("userData");

      router.replace('/')
    }

    return <button onClick={logout} className="w-32 text-white">Sair</button>
}

export default ButtonLogout;
