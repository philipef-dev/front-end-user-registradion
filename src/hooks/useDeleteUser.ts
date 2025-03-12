import { useCallback, useState } from "react";
import { userService } from "@/app/services";

const useDeleteUser = () => {
    const [loading, setLoading] = useState(false);

    const deleteUser = useCallback(async (id: string) => {
        setLoading(true);

        try {
            const response = await userService.deleteUser(id)
            return response
        } catch (error) {
            console.log('Erro ao deletar usuário', error);
        } finally {
            setLoading(false);
        }
    }, [])

    return { deleteUser, loading }
}

export default useDeleteUser;