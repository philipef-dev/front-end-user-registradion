import { useState } from "react";
import axiosInstance from "@/app/services/api";

const useDeleteUser = () => {
    const [loading, setLoading] = useState(false);

    async function deleteUser(id: number) {
        setLoading(true);

        try {
            await axiosInstance.delete(`/users/${id}`);            
        } catch (error) {
            console.log('Erro ao deletar usuário', error);
        } finally {
            setLoading(false);
        }
    }

    return { deleteUser, loading }
}

export default useDeleteUser;