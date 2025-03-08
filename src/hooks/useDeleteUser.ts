import api from "@/app/services/api";
import { useState } from "react";

const useDeleteUser = () => {
    const [loading, setLoading] = useState(false);

    async function deleteUser(id: number) {
        setLoading(true);

        try {
            await api.delete(`/user/${id}`);
        } catch (error) {
            console.log('Erro ao deletar usuário', error);
        } finally {
            setLoading(false);
        }
    }

    return { deleteUser, loading }
}

export default useDeleteUser;