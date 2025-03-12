import { userService } from "@/app/services";
import { User } from "@/types/user"
import { useCallback, useState } from "react"

const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState<string | null>(null);

    const getUsers = useCallback(async () => {
        try {
            const response = await userService.getUsers()
            setUsers(response);
        } catch (err) {
            console.error(`Erro ao buscar usuário`, err);
            setError('Erro ao buscar usuários');
        }
    }, []);


    return { users, getUsers, error }
}

export default useUsers;