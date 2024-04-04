"use client"

const UsersTable = () => {

  const usersData = [
    { id: 1, name: 'João', status: 'ativo', lastLogin: '2024-03-29', moneySpent: 150 },
    { id: 2, name: 'Maria', status: 'inativo', lastLogin: '2024-03-28', moneySpent: 200 },
    { id: 3, name: 'Pedro', status: 'ativo', lastLogin: '2024-03-27', moneySpent: 100 },
    { id: 4, name: 'Calvin', status: 'ativo', lastLogin: '2024-03-29', moneySpent: 700 },
  ];

  return (
    <div className="overflow-x-auto">
      <table className=" divide-y divide-gray-200">
        <thead className="bg-[#161717]">
          <tr className="">
            <th className="px-6 py-7 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">Nome</th>
            <th className="px-6 py-7 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
            <th className="px-6 py-7 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-7 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Login</th>
            <th className="px-6 py-7 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Compras</th>
          </tr>
        </thead>
        <tbody className="bg-[#161717] divide-y divide-gray-200">
          {usersData.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 text-white whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 text-white whitespace-nowrap">{user.id}</td>
              <td className="px-6 py-4 text-white whitespace-nowrap">{user.status}</td>
              <td className="px-6 py-4 text-white whitespace-nowrap">{user.lastLogin}</td>
              <td className="px-6 py-4 text-white whitespace-nowrap">{user.moneySpent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
