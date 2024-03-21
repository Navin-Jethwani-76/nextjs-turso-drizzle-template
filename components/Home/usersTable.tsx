"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Code,
  CardBody,
  Card,
} from "@nextui-org/react";
import { usersType } from "@/db/schema";

const UsersTable = ({ users }: { users: usersType[] }) => {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, rowsPerPage, users]);

  return (
    <Table
      aria-label="Example table with client side pagination"
      classNames={{
        wrapper: "min-h-[222px]",
      }}
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      topContent={
        <Card className="flex justify-center w-full">
          <CardBody>
            <p className="text-center">Users</p>
          </CardBody>
        </Card>
      }
    >
      <TableHeader>
        <TableColumn key="name">ID</TableColumn>
        <TableColumn key="role">NAME</TableColumn>
        <TableColumn key="status">EMAIL</TableColumn>
      </TableHeader>
      <TableBody>
        {items.map((user) => {
          return (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
