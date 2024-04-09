"use client"

import Search from "../SearchInfo"
import { IoIosArrowDown } from "react-icons/io";
import User from '../../../assets/User.jpg'
import { VscAccount } from "react-icons/vsc";
import { useEffect, useState } from "react";
import ButtonLogout from "../ButtonLogout/ButtonLogout";
import Image from "next/image";
import axios from "axios";
import { useSession } from "next-auth/react";

interface UserData {
  name: string;
  email: string;
}

const Header: React.FC<{ title: string }> = ({title}) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data }: any = useSession()
  
    const getUserData = async (userId: any) => {
      try {
        const response = await axios.get(
          `http://localhost:3001/user/${userId._id}`);
        setUserData(response.data.user);
        localStorage.setItem('userData', JSON.stringify(response.data.user));
      } catch (error) {
        console.error("Erro ao buscar os dados do usuário:", error);
      }
    };
    
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    } else {
      getUserData(data);
    }
  }, []);
 

  return (
    <nav className="p-2 pt-6 bg-[#242424]" >
        <div className="flex items-center justify-between">
            <div className="pl-36">
                <Search 
                type="text"
                placeholder="Buscar..."
                value="Buscar"
                />
            </div>
            <div>
                <h1 className="text-white text-2xl font-serif">{title}</h1>
            </div>           
            <div className="flex items-center">
              {userData && 
                    <div>
                        <p className="text-white text-[14px]">{userData.name}</p>
                        <p className="text-gray-400 text-[18px]">{userData.email}</p>              
                    </div>
              }           
                <div className="flex m-2 items-center relative">
                    <Image 
                      className="w-12 h-12 rounded-full" 
                      src={User}  
                      alt="user"
                      width={150}
                      height={150}
                      priority
                    />
                    <IoIosArrowDown 
                    className="text-white ml-2 cursor-pointer" 
                    size={20}
                    onClick={() => setMenuOpen(!menuOpen)}
                    />
                    {menuOpen && (
            <div className="absolute top-full right-0 z-10 mt-2 mr-6 bg-[#6b6b6b] h-24 w-44 rounded-md shadow-lg py-2">
              <div
                className="px-4 py-2 text-gray-800 hover:bg-slate-900 duration-200 rounded-xl cursor-pointer flex justify-center items-center"               
              >
                <p className="text-white ml-2">Conta</p>
              </div>
              <div
                className="px-4 py-2 text-gray-800 hover:bg-slate-900 duration-200 rounded-xl  cursor-pointer flex justify-center items-center"
              >          
                <ButtonLogout />
              </div>
            </div>
          )}
                </div>      
                               
            </div>
        </div>
    </nav>
  )
}

export default Header
