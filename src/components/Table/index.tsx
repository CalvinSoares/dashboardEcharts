import axios from "axios";
import { useEffect, useState } from "react";

interface UserData {
  _id: string;
  name: string;
  email: string;
}

const UsersTable = () => {
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://api-dashboard-u4g5.onrender.com/users");
        setUsersData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os usuários:", error);
      }
    };

    fetchUsers();
  }, []);

  // Cálculo do índice inicial e final dos usuários a serem exibidos na página atual
  const startIndex = (currentPage - 1) * 4;
  const endIndex = currentPage * 4;

  // Usuários a serem exibidos na página atual
  const usersOnPage = usersData.slice(startIndex, endIndex);

  // Verificar se o botão "Próximo" deve ser desativado
  const isNextDisabled = endIndex >= usersData.length;

  return (
    <div className="overflow-x-auto">
      <table className="divide-y divide-gray-200 w-full">
        <thead className="bg-[#161717]">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
          </tr>
        </thead>
        <tbody className="bg-[#161717] divide-y divide-gray-200">
          {usersOnPage.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 text-white whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 text-white whitespace-nowrap">{user._id}</td>
              <td className="px-6 py-4 text-white whitespace-nowrap">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1}
          className="mr-2 px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Anterior
        </button>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={isNextDisabled}
          className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
          Próxima
        </button>
      </div>
    </div>
  );
};

export default UsersTable;
