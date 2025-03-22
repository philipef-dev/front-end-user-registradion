import { User } from "@/types/user";
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import EditUserModal from "../modal/Modal";
import { useState } from "react";

interface UserProps {
  users: User[];
  onDeleteUser: (id: string) => Promise<void>;
  onEditUser: (id: string, user: User) => Promise<void>
}

const Table = ({ users, onDeleteUser, onEditUser }: UserProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userToEdit, setIsUserToEdit] = useState<User | null>(null);

  const handleDeleteUser = async (id: string) => {
    await onDeleteUser(id);
  };

  const handleEditUser = (user: User) => {
    setIsUserToEdit(user);
    setIsModalOpen(true);
  }

  const handleSaveUser = (updateUser: User) => {
    if (!updateUser.id) return
    onEditUser(updateUser.id?.toString(), updateUser);
  }

  return (
    <div>
      {users.length > 0 ? (
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
                    <button type="button" onClick={() => handleEditUser(user)}>
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
      ) : (
        <p className="text-center p-4">Nenhum usuário cadastrado</p>
      )}

      <EditUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userToEdit={userToEdit}
        onSave={handleSaveUser}
      />
    </div >
  );
}

export default Table;
