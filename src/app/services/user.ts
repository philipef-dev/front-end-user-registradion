import { NewUser, User } from "@/types/user";
import axiosInstance from "./api";

export const userService = {
    getUsers: async (): Promise<User[]> => {
        const response = await axiosInstance.get('/users');
        return response.data
    },
    createUser: async (newUser: NewUser): Promise<User> => {
        const response = await axiosInstance.post<User>('/users', newUser);
        return response.data
    },
    deleteUser: async (id: string): Promise<void> => {
        await axiosInstance.delete(`users/${id}`);
    },
    upgradeUser: async (id: string, user: Partial<User>): Promise<User> => {
        const response = await axiosInstance.patch(`/users/${id}`, user);
        return response.data;
    }
}