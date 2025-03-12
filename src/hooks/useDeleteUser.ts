import { useCallback, useState } from "react";
import axiosInstance from "@/app/services/api";
import useUsers from "./useGetUsers";

const useDeleteUser = () => {
    // const { users } = useUsers();
    const [loading, setLoading] = useState(false);

    const deleteUser = useCallback(async  (id: string) => {
        setLoading(true);

        try {
            console.count('deleteUser >>')
            const response = await axiosInstance.delete(`/users/${id}`);
            console.log('Resposta da exclusão:', response);
            
            // setUsers(users.filter(user => user.id !== id));            
            // console.log('Usuário após exclusão', users)
        } catch (error) {
            console.log('Erro ao deletar usuário', error);
        } finally {
            setLoading(false);
        }
    },[])

    return { deleteUser, loading }
}

export default useDeleteUser;