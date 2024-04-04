import { FiEye } from "react-icons/fi";


const UsersField = () => {
    const UsersData = [
      { name: 'calvin', amount: 700 },
      { name: 'jose asis', amount: 500 },
      { name: 'fernando', amount: 300 },
      { name: 'calvin', amount: 700 },
      { name: 'jose asis', amount: 500 },
      { name: 'fernando', amount: 300 },
      { name: 'calvin', amount: 700 },
      { name: 'jose asis', amount: 500 },
      { name: 'fernando', amount: 300 },
      { name: 'calvin', amount: 700 },
      { name: 'jose asis', amount: 500 },
      { name: 'fernando', amount: 300 },
      { name: 'calvin', amount: 700 },
      { name: 'jose asis', amount: 500 },
      { name: 'fernando', amount: 300 },
      { name: 'calvin', amount: 700 },
      { name: 'jose asis', amount: 500 },
      { name: 'fernando', amount: 300 },
    ];

    const totalUsers = UsersData.length
  
    return (
      <div className="bg-[#fad85d] border-2 border-gray-100  h-40 w-72 p-4 rounded-3xl shadow flex flex-col items-center justify-center">
        <h2 className="text-lg text-black font-poppins mr-32 pb-12">Usuarios</h2>
        <ul className="flex items-center">
          <div className="bg-[#242424] rounded-full mr-6 w-10 h-10 flex items-center justify-center hover:scale-110 cursor-pointer duration-300">
            <FiEye className="text-2xl text-[#fad85d]" size={26}/>
          </div>
            <li className="text-black flex justify-between mr-2 font-bold text-3xl font-poppins ">
                <span>{totalUsers}</span>
            </li>
        </ul>
      </div>
    );
  };
  
  export default UsersField;