"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from "@heroui/react";
import { FiPlus } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";
import dynamic from "next/dynamic";
import DeleteRoom from "./DeleteRoom";

export const columns = [
  { name: "NAME", uid: "name", sortable: true },
  { name: "PRICE", uid: "price_per_night", sortable: true },
  { name: "SIZE", uid: "room_size", sortable: true },
  { name: "BED TYPE", uid: "bed_type" },
  { name: "OCCUPANCY", uid: "max_occupancy" },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

export const statusOptions = [
  { name: "Available", uid: "active" },
  { name: "Reserved", uid: "paused" },
];

export function capitalize(s: string) {
  return s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : "";
}

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
};

type AllRoomsProps = {
  AllRooms: {
    name: string;
    id: string;
    price_per_night: number;
    description: string;
    image: string;
    room_size: string;
    bed_type: string;
    max_occupancy: number;
    amenities: string[];
    Reservation: {
      id: string;
      startDate: string;
      endDate: string;
      roomId: string;
      userId: string;
      price: number;
      status: string;
      paymentIntentId: string;
      clientSecretId: string;
    }[];
  }[];
  Allreservation: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    startDate: string;
    endDate: string;
    roomId: string;
    userId: string;
    price: number;
    status: string;
    paymentIntentId: string;
    clientSecretId: string;
  }[];
};
const INITIAL_VISIBLE_COLUMNS = [
  "name",
  "room_size",
  "bed_type",
  "status",
  "actions",
];

const AdminUploadedRoom = ({ AllRooms }: AllRoomsProps) => {
  const [openIt, setOpenIt] = useState(false);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState<number>(0);
  type AllInfo = (typeof AllRooms)[0];

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "max_occupancy",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(AllRooms.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredRooms = [...AllRooms];

    if (hasSearchFilter) {
      filteredRooms = filteredRooms.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredRooms = filteredRooms.filter((user) => {
        const roomId = user.id;
        const AllReserved = user.Reservation.find((Reserved) => {
          return Reserved.roomId === roomId && Reserved.status === "Completed";
        });
        return Array.from(statusFilter).includes(
          AllReserved ? "paused" : "active"
        );
      });
    }
    return filteredRooms;
  }, [filterValue, statusFilter, AllRooms, hasSearchFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: AllInfo, b: AllInfo) => {
      const first = a[sortDescriptor.column as keyof AllInfo] as number;
      const second = b[sortDescriptor.column as keyof AllInfo] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);
  const renderCell = React.useCallback(
    (room: AllInfo, columnKey: React.Key) => {
      const cellValue = room[columnKey as keyof AllInfo];
      // const UserFr =
      // Allreservation.find((Allreserve) => {
      //   return Allreserve.status === "Completed";
      // })?.roomId === room.id
      //   ? "active"
      //   : "paused";
      const roomId = room.id;
      const AllReserved = room.Reservation.find((Reserved) => {
        return Reserved.roomId === roomId && Reserved.status === "Completed";
      });
      // return Array.from(statusFilter).includes(
      //   AllReserved ? "active" : "paused"
      // );
      switch (columnKey) {
        case "name":
          return (
            <User
              avatarProps={{ radius: "full", size: "sm", src: room.image }}
              classNames={{
                description: "text-default-500",
              }}
              description={`${new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(room.price_per_night)} / Night`}
              name={cellValue as string | number | string[]}
            >
              {room.name}
            </User>
          );
        case "bed_type":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">
                {cellValue as string | number | string[]}
              </p>
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize border-none gap-1 text-default-600"
              color={statusColorMap[AllReserved ? "paused" : "active"]}
              size="sm"
              variant="dot"
            >
              {AllReserved ? "Reserved" : "Available"}
            </Chip>
          );
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown className="bg-background border-1 border-default-200">
                <DropdownTrigger>
                  <Button isIconOnly radius="full" size="sm" variant="light">
                    <HiDotsVertical size={20} className="text-default-400" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem
                    as={Link}
                    href={`/admin/rooms/${room.id}`}
                    key="view"
                    color="default"
                    className="bg-foreground text-background"
                  >
                    View
                  </DropdownItem>
                  <DropdownItem
                    as={Link}
                    href={`/admin/rooms/edit/${room.id}`}
                    key="edit"
                    color="default"
                    className="bg-foreground text-background"
                  >
                    Edit
                  </DropdownItem>
                  <DropdownItem
                    onPress={() => {
                      setOpenIt(true);
                      setName(room.name);
                      setId(room.id);
                      setPrice(room.price_per_night);
                      setDescription(room.description);
                      setImageLink(room.image);
                    }}
                    color="danger"
                    key={"delete"}
                    className="bg-red-500 text-white"
                  >
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<IoSearch size={20} className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={
                    <FaChevronDown size={15} className="text-small" />
                  }
                  size="sm"
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={
                    <FaChevronDown size={15} className="text-small" />
                  }
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              as={Link}
              href="/admin/upload-room"
              className="bg-foreground text-background"
              endContent={<FiPlus size={20} />}
              size="sm"
            >
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {AllRooms.length} rooms
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    AllRooms.length,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]/tr:first:before:rounded-none",
        "group-data-[first=true]/tr:last:before:rounded-none",
        // middle
        "group-data-[middle=true]/tr:before:rounded-none",
        // last
        "group-data-[last=true]/tr:first:before:rounded-none",
        "group-data-[last=true]/tr:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <>
      <DeleteRoom
        setOpenIt={setOpenIt}
        openIt={openIt}
        id={id}
        name={name}
        price={price}
        description={description}
        imageLink={imageLink}
      />

      <Table
        isCompact
        removeWrapper
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper:
              "after:bg-foreground after:text-background text-background",
          },
        }}
        classNames={classNames}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
        suppressHydrationWarning
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No users found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>
                  {renderCell(item, columnKey) as string | number | string[]}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default dynamic(() => Promise.resolve(AdminUploadedRoom), {
  ssr: false,
});
