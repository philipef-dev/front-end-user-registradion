import { User } from "@/types/user";
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';

interface UserProps {
    users: User[];
}

const Table = ({ users }: UserProps) => {
    return (
        <div>
            {users.length === 0 ? (<p>Nenhum usuário encontrado</p>) : (
                <table className="bg-white p-4 border border-gray-200 rounded-b-lg shadow-md">
                    <thead>
                        <tr className="text-left bg-gray-100 text-gray-700">
                            <th className="px-4 py-2 border-b text-center">Nome completo</th>
                            <th className="px-4 py-2 border-b text-center">E-mail</th>
                            <th className="px-4 py-2 border-b text-center">Idade</th>
                            <th className="px-4 py-2 border-b text-center">Ações</th>
                        </tr >
                    </thead >
                    <tbody>
                        {users.map((user) => {
                            return (
                                <tr key={user.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border-b">{user.name} </td>
                                    <td className="px-4 py-2 border-b">{user.email} </td>
                                    <td className="px-4 py-2 border-b"> {user.age} </td>
                                    <td className="px-4 py-2 border-b">
                                        <div className="flex space-x-2">
                                            <CiEdit className="cursor-pointer" />
                                            <MdDeleteForever className="cursor-pointer" />
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table >
            )}
        </div >
    )
}

export default Table