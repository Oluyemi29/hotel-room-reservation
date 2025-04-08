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

interface SubscriberProps {
    Subscriber: {
    id: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
  }[];
}
export default function Subscriber({ Subscriber }: SubscriberProps) {
  const [page, setPage] = React.useState(1);
  const rowsPerPage = Subscriber.length > 4 ? 4 : Subscriber.length;

  const pages = Math.ceil(Subscriber.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return Subscriber.slice(start, end);
  }, [page, Subscriber, rowsPerPage]);

  return (
    <div>
      <h1 className="text-center my-3 font-bold text-2xl">All Users Info</h1>

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
          <TableColumn key="email">EMAIL</TableColumn>
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
