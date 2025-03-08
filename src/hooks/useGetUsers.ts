import axiosInstance from "@/app/services/api";
import { User } from "@/types/user"
import { useEffect, useState } from "react"

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    async function getUsers() {
        try {
            const response = await axiosInstance.get('/users');

            if (Array.isArray(response.data) && response.data.length) {
                setUsers(response.data);
            } else {
                setError('Nenhum usuário encontrado.');
                return
            }

        } catch (err) {
            console.error(`Erro ao buscar usuário`, err);
            setError('Erro ao buscar usuários')
        };
    };

    useEffect(() => { getUsers() }, [])

    return { users, getUsers, setUsers, error }


}

export default useUsers;