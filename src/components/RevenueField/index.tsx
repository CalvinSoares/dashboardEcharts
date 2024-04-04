import { MdAttachMoney } from "react-icons/md";

const RevenueField = () => {
    const revenueData = [
      { month: 'Jan', amount: 10000 },
      { month: 'Feb', amount: 15000 },
      { month: 'Mar', amount: 20000 },
    ];

    const totalRevenue = revenueData.reduce((total, revenue) => total + revenue.amount, 0)
  
    return (
      <div className="bg-[#f3a0ff] border-2 border-gray-100  h-40 w-72 p-4 rounded-3xl shadow flex flex-col items-center justify-center">
        <h2 className="text-lg text-black font-poppins mr-32 pb-12">Faturamento</h2>
        <ul className="flex items-center">
          <div className="bg-gray-100 rounded-full mr-6 w-10 h-10 flex items-center justify-center hover:scale-110 cursor-pointer duration-300">
            <MdAttachMoney className="text-[#f3a0ff]" size={28}/>
          </div>
          <li className="text-black flex justify-between mr-2 font-bold text-3xl font-poppins">
            R$ {totalRevenue}K
          </li>   
          
        </ul>
          
      </div>
    );
  };
  
  export default RevenueField;