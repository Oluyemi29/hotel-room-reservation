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
  getKeyValue,
} from "@heroui/react";

interface AllUserProps {
  allUser: {
    id: string;
    firstname: string | null;
    lastname: string | null;
    email: string;
    imageUrl: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}
export default function AllUser({ allUser }: AllUserProps) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = allUser.length > 4 ? 4 : allUser.length;

  const pages = Math.ceil(allUser.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return allUser.slice(start, end);
  }, [page, allUser, rowsPerPage]);

  return (
    <div>
      <h1 className="text-center my-3 font-bold text-2xl">All Subscribers</h1>

      <Table
        aria-label="Example table with client side pagination"
        bottomContent={
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="default"
              className="text-carton"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        }
        classNames={{
          wrapper: "min-h-[222px]",
        }}
      >
        <TableHeader className="">
          <TableColumn key="firstname">FIRSTNAME</TableColumn>
          <TableColumn key="lastname">LASTNAME</TableColumn>
          <TableColumn key="email">EMAIL</TableColumn>
          <TableColumn key="role">ROLE</TableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{getKeyValue(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
