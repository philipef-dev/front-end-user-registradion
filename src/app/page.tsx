"use client"

import Form from "./components/form/Form";
import Table from "./components/table/Table";

export default function Home() {
  return (
    <div className="flex justify-center gap-4 pt-30  min-h-screen  bg-gray-100">
      <Form />
      <Table />
    </div>
  );
}
