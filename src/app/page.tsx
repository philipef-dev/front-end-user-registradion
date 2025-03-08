"use client"

import Form from "../components/form/Form";
import Table from "../components/table/Table";
import { User } from "@/types/user";
import useUsers from "@/hooks/useGetUsers";
import { useEffect } from "react";

export default function Home() {
  const { users, setUsers, getUsers  } = useUsers()

  function handleAddUser(newUser: User) {
    setUsers(prevUsers => [...prevUsers, newUser]);
  }

  useEffect(() => {getUsers()}, [getUsers]);

  return (
    <div className="flex justify-center gap-4 pt-30  min-h-screen  bg-gray-100">
      <Form onAddUser={handleAddUser} />
      <Table users={users} />
    </div>
  );
}
