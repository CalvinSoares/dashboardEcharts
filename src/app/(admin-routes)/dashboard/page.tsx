"use client"

import SalesChart from "@/components/Charts";
import Header from "@/components/Header";
import LineChart from "@/components/LineBar";
import { MdAttachMoney } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import UsersTable from "@/components/Table";
import { FiEye } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/Loading/loading";

const Dashboard = () => {  
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api-dashboard-u4g5.onrender.com/users");
        setTotalUsers(response.data.length);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar o número total de usuários:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  const salesData = [
    { date: '2022-01-01', amount: 1000 },
    { date: '2022-01-02', amount: 1500 },
    { date: '2022-01-03', amount: 2000 },
  ];

  const totalSales = salesData.reduce((total, sale) => total + sale.amount, 0)

  const revenueData = [
    { month: 'Jan', amount: 10000 },
    { month: 'Feb', amount: 15000 },
    { month: 'Mar', amount: 20000 },
  ];

  const totalRevenue = revenueData.reduce((total, revenue) => total + revenue.amount, 0)

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="bg-[#242424] min-h-screen">
          <Header title="Dashboard" />
          <div className="grid grid-cols-2 sm:grid-cols-2 xs:grid-rows-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-center ml-28 gap-4 md:px-8 md:py-6 lg:px-20 lg:py-10">
            
            <div className="bg-[#0bf4c8] hover:scale-105 duration-200 ease-linear rounded-3xl mx-auto lg:h-40 lg:w-72 md:h-28 md:w-44 sm:h-24 sm:w-40 xs:h-24 xs:w-40 shadow flex flex-col items-center justify-center cursor-pointer">
              <h2 className="lg:text-lg md:text-md sm:text-sm xs:text-sm font-poppins lg:mr-32 md:mr-24 sm:mr-16 xs:mr-16 lg:pb-12 md:pb-8 sm:pb-4 xs:pb-4 text-black">Vendas</h2>
              <ul className="flex items-center">
                <div className="bg-[#242424] rounded-full mr-6 lg:w-10 md:w-8 sm:w-6 xs:w-6 lg:h-10 md:h-8 sm:h-6 xs:h-6 flex items-center justify-center hover:scale-110 cursor-pointer duration-300">
                  <SlGraph className="text-2xl md:text-xl sm:text-md xs:text-sm text-[#0bf4c8]" />
                </div>
                <li className="text-black flex justify-between font-bold lg:text-3xl md:text-xl sm:text-lg xs:text-lg font-poppins">
                  <span>{totalSales}</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#f3a0ff] hover:scale-105 duration-200 ease-linear rounded-3xl p-4 mx-auto lg:h-40 lg:w-72 md:h-28 md:w-44 sm:h-24 sm:w-40 xs:h-24 xs:w-40 shadow flex flex-col items-center justify-center cursor-pointer">
              <h2 className="lg:text-lg md:text-md sm:text-sm xs:text-sm font-poppins lg:mr-32 md:mr-12 sm:mr-10 xs:mr-8 lg:pb-12 md:pb-6 sm:pb-2 xs:pb-2 text-black">Faturamento</h2>
              <ul className="flex items-center">
                <div className="bg-gray-100 rounded-full mr-4 lg:w-10 md:w-6 sm:w-6 xs:w-6 lg:h-10 md:h-6 sm:h-6 xs:h-6 flex items-center justify-center hover:scale-110 cursor-pointer duration-300">
                  <MdAttachMoney className="text-[#f3a0ff] text-2xl md:text-xl sm:text-md xs:text-sm" scale={76} />
                </div>
                <li className="text-black flex items-center justify-center font-bold lg:text-3xl md:text-md sm:text-md xs:text-xs font-poppins">
                  <span>{`R$ ${totalRevenue}`}K</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#e7c64d] hover:scale-105 duration-200 ease-linear rounded-3xl p-4 mx-auto lg:h-40 lg:w-72 md:h-28 md:w-44 sm:h-24 sm:w-40 xs:h-24 xs:w-40 shadow flex flex-col items-center justify-center cursor-pointer">
              <h2 className="lg:text-lg md:text-md sm:text-sm xs:text-sm font-poppins lg:mr-32 md:mr-12 sm:mr-10 xs:mr-8 lg:pb-12 md:pb-6 sm:pb-2 xs:pb-2 text-black">Usuarios</h2>
                <ul className="flex items-center">
                  <div className="bg-[#242424] rounded-full mr-4 lg:w-10 md:w-6 sm:w-6 xs:w-6 lg:h-10 md:h-6 sm:h-6 xs:h-6 flex items-center justify-center hover:scale-110 cursor-pointer duration-300">
                    <FiEye className="text-2xl md:text-xl sm:text-md xs:text-sm text-[#fad85d]" size={26}/>
                  </div>
                  <li className="text-black flex items-center justify-center font-bold lg:text-3xl md:text-md sm:text-md xs:text-xs font-poppins">
                      <span>{totalUsers}</span>
                  </li>
                </ul>
            </div>
            <div className="row-span-2 bg-[#161717] h-full rounded-3xl p-4 md:p-8">
              <SalesChart />
              <div className="w-[90%] h-0.5 bg-gray-600 "></div>
              <div className="w-[90%] flex flex-col items-start justify-start">
                <div className="w-[100%]">
                  <p className="text-xs font-poppins mt-8 pb-2 text-white">Usuários Online</p>
                  <h2 className="text-white w-[80%] border-b text-4xl font-poppins ">12</h2>
                </div>
                <div className="w-[100%]">
                  <p className="text-xs font-poppins mt-6 pb-2 text-white">Usuários Offiline</p>
                  <h2 className="text-white w-[80%] border-b text-4xl font-poppins ">6</h2>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-[#161717] rounded-md p-4 lg:p-0">
              <LineChart />
            </div>

            <div className="col-span-2 bg-[#161717] rounded-md p-4">
              <UsersTable />
            </div>
            
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard