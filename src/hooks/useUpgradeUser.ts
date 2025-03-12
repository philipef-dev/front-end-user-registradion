import { userService } from "@/app/services"
import { User } from "@/types/user"
import { useState } from "react"

const useUpgradeUsers = () => {
    const [error, setError] = useState<null | string>(null);
    const [loading, setLoading] = useState(false);

    const upgradeUser = async (id: string, user: Partial<User>) => {
        setLoading(true);
        setError(null);

        try {
            const response = await userService.upgradeUser(id, user)
            return response;
        }
        catch (error) {
            console.error('Erro ao atualizar usuário', error);
            setError('Erro ao atualizar um usuário');
        } finally {
            setLoading(false);
        }
    }

    return { upgradeUser, error, loading }
}

export default useUpgradeUsers