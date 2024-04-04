"use client"

import Search from "../SearchInfo"
import { IoIosArrowDown } from "react-icons/io";
import User from '../../../assets/User.jpg'
import { VscAccount } from "react-icons/vsc";
import { useState } from "react";
import ButtonLogout from "../ButtonLogout/ButtonLogout";
import Image from "next/image";

interface UserData {
    userName: string;
    email: string;
}


const dados: UserData[] = [
    {
        userName: 'Calvin Soares',
        email: 'Calvinteste@teste.com'
    }
]

const Header: React.FC<{ title: string }> = ({title}) => {
  const [menuOpen, setMenuOpen] = useState(false);
 

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
                {dados.map((item, index) => (
                    <div key={index}>
                        <p className="text-white text-[14px]">{item.userName}</p>
                        <p className="text-gray-400 text-[18px]">{item.email}</p>              
                    </div>
                ))}
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
                className="px-4 py-2 text-gray-800 hover:bg-slate-900 hover:rounded-xl cursor-pointer flex justify-center items-center"               
              >
                <VscAccount className="text-white" size={24} />
                <p className="text-white ml-2">Conta</p>
              </div>
              <div
                className="px-4 py-2 text-gray-800 hover:bg-slate-900 hover:rounded-xl cursor-pointer flex justify-center  items-center gap-1"
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
