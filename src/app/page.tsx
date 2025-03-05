"use client"

import { useEffect, useState } from "react"
import api from "./services/api";

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
}

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get("/users")
      .then((response) => setUsers(response.data))
      .catch((err) => {
        console.error(`ops! ocorreu um erro`, err)
      })
  }, [])

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  bg-gray-100">
      <form className="bg-white p-4 rounded shadow-md w-1/3 mb-4">
        <h1 className="text-2xl text-center mb-4 font-semibold">
          Cadastro de Usuários
        </h1>
        <div className="mb-2">
          <label
            htmlFor="name"
            className=" block font-medium text-sm text-gray-700"
          >
            Nome:
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 required"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className=" block font-medium text-sm text-gray-700"
          >
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 required"
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="age"
            className=" block font-medium text-sm text-gray-700"
          >
            Idade:
          </label>
          <input
            type="number"
            id="age"
            className="border border-gray-300 p-2 w-full rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300 required"
          />
        </div>
        <div className="mt-4 text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 transition-all rounded-md"
          >
            Salvar
          </button>
        </div>
      </form>
      <h1 className="text-lg font-bold">Lista de usuários</h1>
      <table className="bg-white w-1/3 mt-4 p-4 border border-gray-200 rounded-b-lg shadow-md">
        <thead>
          <tr className="text-left bg-gray-100 text-gray-700">
            <th className="px-4 py-2 border-b text-center">Nome completo</th>
            <th className="px-4 py-2 border-b text-center">E-mail</th>
            <th className="px-4 py-2 border-b text-center">Idade</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 border-b">{user.name} </td>
              <td className="px-4 py-2 border-b">{user.email} </td>
              <td className="px-4 py-2 border-b"> {user.age} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
