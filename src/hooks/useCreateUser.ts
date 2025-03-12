import { useCallback, useState } from "react";
import { NewUser, User } from "@/types/user";
import { userService } from "@/app/services";

const useCreateUser = () => {
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState<string | null>(null);

    const addUser = useCallback(async (userData: NewUser): Promise<User | null> => {
        setLoading(true);
        setErro(null);

        try {
            const response = await userService.createUser(userData);
            return response
        } catch (err) {
            console.error("Erro ao cadastrar novo usuário", err);
            setErro('Erro ao cadastrar novo usuário');
            return null;
        } finally {
            setLoading(false);
        }
    }, []);

    return { addUser, erro, loading }
}

export default useCreateUser;