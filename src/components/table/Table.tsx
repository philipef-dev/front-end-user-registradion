import { User } from "@/types/user";
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';

interface UserProps {
  users: User[];
  onDeleteUser: (id: string) => Promise<void>;
 // getUsers: () => Promise<void>;
}

const Table = ({ users, onDeleteUser }: UserProps) => {
  const handleDeleteUser = async (id: string) => {
    await onDeleteUser(id);
    
  };

  return (
    <div>
      <table className="bg-white p-4 border border-gray-200 rounded-b-lg shadow-md">
        <thead>
          <tr className="text-left bg-gray-100 text-gray-700">
            <th className="px-4 py-2 border-b text-center">Nome completo</th>
            <th className="px-4 py-2 border-b text-center">E-mail</th>
            <th className="px-4 py-2 border-b text-center">Idade</th>
            <th className="px-4 py-2 border-b text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id ?? `user-${index}`} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{user.name}</td>
              <td className="px-4 py-2 border-b">{user.email}</td>
              <td className="px-4 py-2 border-b">{user.age}</td>
              <td className="px-4 py-2 border-b">
                <div className="flex space-x-2">
                  <button>
                    <CiEdit className="cursor-pointer" />
                  </button>
                  <button type="button" onClick={() => handleDeleteUser(user.id!.toString())}>
                    <MdDeleteForever className="cursor-pointer" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
