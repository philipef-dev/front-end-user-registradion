import api from "@/app/services/api";
import { User } from "@/types/user";
import { useEffect, useState } from "react"
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';


const Table = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
        api.get("/users")
            .then((response) => setUsers(response.data))
            .catch((err) => {
                console.error(`ops! ocorreu um erro`, err)
            })
    }, [])

    return (
        <>
            <h1 className="text-lg font-bold">Lista de usuários</h1>
            <table className="bg-white w-1/3 mt-4 p-4 border border-gray-200 rounded-b-lg shadow-md">
                <thead>
                    <tr className="text-left bg-gray-100 text-gray-700">
                        <th className="px-4 py-2 border-b text-center">Nome completo</th>
                        <th className="px-4 py-2 border-b text-center">E-mail</th>
                        <th className="px-4 py-2 border-b text-center">Idade</th>
                        <th className="px-4 py-2 border-b text-center">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
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
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table