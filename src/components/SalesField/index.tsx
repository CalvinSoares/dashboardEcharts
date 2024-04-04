"use client"

import { SlGraph } from "react-icons/sl";

const SalesField = () => {
    const salesData = [
      { date: '2022-01-01', amount: 1000 },
      { date: '2022-01-02', amount: 1500 },
      { date: '2022-01-03', amount: 2000 },
    ];

    const totalSales = salesData.reduce((total, sale) => total + sale.amount, 0)
  
    return (
      <div className="bg-[#0bf4c8] border-2 border-gray-100  h-40 w-72 p-4 rounded-3xl shadow flex flex-col items-center justify-center">
        <h2 className="text-lg font-poppins mr-32 pb-12 text-black">Vendas</h2>
        <ul className="flex items-center">
            <div className="bg-[#242424] rounded-full mr-6 w-10 h-10 flex items-center justify-center hover:scale-110 cursor-pointer duration-300">
              <SlGraph className="text-2xl text-[#0bf4c8]" size={26}/>
            </div>
            <li className="text-black flex justify-between mr-2 font-bold text-3xl font-poppins ">
                <span>{totalSales}</span>
            </li>      
        </ul>
      </div>
    );
  };
  
  export default SalesField;