import Link from "next/link";
import React from "react";

const AdminHeader = () => {
  return (
    <div className="flex flex-row justify-center w-full my-5 gap-14 mx-auto">
      <Link href={"/admin"}>
        <h1 className="font-bold underline underline-offset-4">Summary</h1>
      </Link>
      <Link href={"/admin/upload-room"}>
        <h1 className="font-bold underline underline-offset-4">Upload Room</h1>
      </Link>
      <Link href={"/admin/rooms"}>
        <h1 className="font-bold underline underline-offset-4">Rooms</h1>
      </Link>
      <Link href={"/admin/reservation"}>
        <h1 className="font-bold underline underline-offset-4">Reservation</h1>
      </Link>
      <Link href={"/admin/users"}>
        <h1 className="font-bold underline underline-offset-4">Users</h1>
      </Link>
      <Link href={"/admin/review"}>
        <h1 className="font-bold underline underline-offset-4">Review</h1>
      </Link>
      <Link href={"/admin/subscribe"}>
        <h1 className="font-bold underline underline-offset-4">Subscribe</h1>
      </Link>
    </div>
  );
};

export default AdminHeader;
