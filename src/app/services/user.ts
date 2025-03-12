import axiosInstance from "./api";

export const userService = {
    getUsers: async () => {
        const response = await axiosInstance.get('/users');

        return response.data
    },
    createUser: async () => {}
}