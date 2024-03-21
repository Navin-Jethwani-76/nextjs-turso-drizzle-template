import React from "react";
import { getUsers } from "@/utils/getUsers";
import UsersTable from "@/components/Home/usersTable";

const page = async () => {
  const users = await getUsers();
  return <UsersTable users={users} />;
};

export default page;
