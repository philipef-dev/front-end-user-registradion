import api from "@/app/services/api";
import { User } from "@/types/user";

export async function addUser(userData: User): Promise<User | null> {
    try {
        const response = await api.post<User>('/user', userData);
        return response.data;
    }
    catch (err) {
        console.log(`Erro ao cadastrar novo usuário`, err);
        return null
    }
}

