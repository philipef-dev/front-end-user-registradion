"use client"

import Form from "../components/form/Form";
import Table from "../components/table/Table";
import { User } from "@/types/user";
import useUsers from "@/hooks/useGetUsers";
import useDeleteUser from "@/hooks/useDeleteUser";
import { useEffect } from "react";
import useCreateUser from "@/hooks/useCreateUser";
import useUpgradeUsers from "@/hooks/useUpgradeUser";

export default function Home() {
  const { users, getUsers } = useUsers()
  const { deleteUser } = useDeleteUser()
  const { addUser } = useCreateUser();
  const { upgradeUser } = useUpgradeUsers();

  async function handleAddUser(newUser: User) {
    await addUser(newUser);
    await getUsers();
  }

  async function handleDeleteUser(id: string) {
    await deleteUser(id);
    await getUsers();
  }

  async function handleEditUser(id: string, user: User) {
    await upgradeUser(id, user);
  }

  useEffect(() => {
    getUsers()
  }, [getUsers]);

  return (
    <div className="flex justify-center gap-4 pt-30  min-h-screen bg-gray-100">
      <Form onSubmit={handleAddUser} />
      <Table onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} users={users} />
    </div>
  );
}
