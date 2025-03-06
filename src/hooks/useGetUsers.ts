import api from "@/app/services/api";
import { User } from "@/types/user"
import { useEffect, useState } from "react"

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])

    async function getUsers() {
        try {
            const userFromApi = await api.get('/users');

            if (!userFromApi.data) {
                console.log('Nenhum usuário cadastrado');
                return
            }

            setUsers(userFromApi.data)
        } catch (err) {
            console.error('Erro ao buscar usuários', err);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return { users, getUsers, setUsers }
}

export default useUsers;