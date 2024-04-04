"use client"

import SalesChart from "@/components/Charts";
import Header from "@/components/Header";
import LineChart from "@/components/LineBar";
import RevenueField from "@/components/RevenueField";
import SalesField from "@/components/SalesField";
import UsersTable from "@/components/Table";
import UsersField from "@/components/UsersField";

const Dashboard = () => {    
  return (
    <div className="bg-[#242424] h-screen">
      <Header title="Dashboard"/>
      <div className="grid grid-rows-2 grid-flow-col">
        <div className="flex items-center justify-around ml-28 mb-8">
          <div>
            <SalesField />
          </div>
          <div>
            <RevenueField />
          </div>
          <div>
            <UsersField />
          </div>
        </div>  
        <div className="flex items-center">
          <div className="ml-40">
            <UsersTable />
          </div>  
          <div className="bg-[#161717] w-[480px] rounded-md px-2 mx-10">
            <LineChart />
            
          </div>      
        </div>
        <aside className="row-span-2 bg-[#161717] flex flex-col items-center justify-center rounded-3xl mt-12 mr-4">
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
        </aside>  
      </div>
    </div>
  )
}

export default Dashboard