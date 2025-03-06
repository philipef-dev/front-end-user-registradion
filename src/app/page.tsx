"use client"

import Form from "./components/form/Form";
import Table from "./components/table/Table";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  bg-gray-100">
      <Form />
      <Table />
    </div>
  );
}
