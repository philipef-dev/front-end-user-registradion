"use client"

import Form from "../components/form/Form";
import Table from "../components/table/Table";
import { User } from "@/types/user";
import useUsers from "@/hooks/useGetUsers";
import useDeleteUser from "@/hooks/useDeleteUser";
import { useEffect } from "react";
import useCreateUser from "@/hooks/useCreateUser";

export default function Home() {
  const { users, getUsers } = useUsers()
  const { deleteUser } = useDeleteUser()
  const { addUser } = useCreateUser();

  console.log({users})


  async function handleAddUser(newUser: User) {
    // setUsers(prevUsers => [...prevUsers, newUser]);
    await addUser(newUser)
    await getUsers()
  }


  async function handleDeleteUser(id: string) {
    // setUsers(prevUsers => [...prevUsers, newUser]);
    await deleteUser(id)
    await getUsers()
  }

  useEffect(() => {
    console.count('effect rodou')
    getUsers()
  }, [getUsers]);

  return (
    <div className="flex justify-center gap-4 pt-30  min-h-screen bg-gray-100">
      <Form onSubmit={handleAddUser} />
      <Table onDeleteUser={handleDeleteUser} users={users} />
    </div>
  );
}
