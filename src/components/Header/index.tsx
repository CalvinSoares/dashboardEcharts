"use client"

import { IoIosArrowDown } from "react-icons/io";
import User from '../../../assets/User.jpg'
import { useEffect, useState } from "react";
import ButtonLogout from "../ButtonLogout/ButtonLogout";
import Image from "next/image";
import axios from "axios";
import { useSession } from "next-auth/react";
import { BiSearch } from 'react-icons/bi';
import Link from "next/link";

interface UserData {
  name: string;
  email: string;
}

const Header: React.FC<{ title: string }> = ({title}) => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const { data }: any = useSession()
  
    const getUserData = async (userId: any) => {
      try {
        const response = await axios.get(
          `https://api-dashboard-u4g5.onrender.com/user/${userId._id}`);
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
        <div className="lg:flex md:flex sm:flex items-center justify-between">
            <div className="pl-36 flex items-center justify-center">
            <div className="h-12 w-48 flex items-center bg-[#333333] rounded-3xl px-4 py-2">
              <input
                type="text"
                placeholder="Buscar.."
                className="bg-transparent h-8 w-36 outline-none text-lg text-white placeholder:text-gray-300"
                value={inputValue}
                onChange={handleChange}
              />
              <BiSearch className="text-white"/>
            </div>
            </div>
            <div className="lg:flex md:hidden sm:hidden xs:hidden">
                <h1 className="text-white lg:text-2xl md:text-lg font-serif">{title}</h1>
            </div>           
            <div className="flex items-center">
              {userData && 
                    <div className="lg:flex lg:flex-col md:hidden sm:hidden xs:hidden">
                        <p className="text-white text-[14px]">{userData.name}</p>
                        <p className="text-gray-400 text-[18px]">{userData.email}</p>              
                    </div>
              }           
                <div className="lg:pl-0 md:pl-0 sm:pl-52 xs:pl-52 flex m-2 items-center justify-center relative ">
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
              <Link
                href="/account"
                className="px-4 py-2 text-gray-800 hover:bg-slate-900 duration-200 rounded-xl cursor-pointer flex justify-center items-center"               
              >
                <p  className="text-white ml-2">Conta</p>
              </Link>
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
