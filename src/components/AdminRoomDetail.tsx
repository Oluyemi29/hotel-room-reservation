"use client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import moment from "moment";
import Link from "next/link";

type userInfoProps = {
  userInfo: {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    price_per_night: number;
    description: string;
    image: string;
    room_size: string;
    bed_type: string;
    max_occupancy: number;
    amenities: string[];
  };
};

const AdminRoomDetail = ({ userInfo }: userInfoProps) => {
  return (
    <div>
      <Card className="p-5 flex text-default-800 flex-row justify-between gap-5">
        <div className="w-full">
          <Image
            src={userInfo.image}
            alt={userInfo.bed_type}
            width={100}
            height={100}
            priority
            quality={100}
            className="w-[80%] rounded-lg mx-auto my-5"
          />
        </div>
        <div className="w-full">
          <h1 className="text-xl font-bold underline underline-offset-4 italic">
            Room Details
          </h1>
          <div className="flex flex-col gap-3">
            <div className="w-full flex my-1 mt-7 gap-4">
              <h1>Name :</h1>
              <h1 className="font-semibold italic">{userInfo.name}</h1>
            </div>
            <div className="w-full flex my-1 gap-4">
              <h1>Bed Type :</h1>
              <h1 className="font-semibold italic">{userInfo.bed_type}</h1>
            </div>
            <div className="w-full flex my-1 gap-4">
              <h1>Room Description :</h1>
              <h1 className="font-semibold italic">{userInfo.description}</h1>
            </div>
            <div className="w-full flex my-1 gap-4">
              <h1>Max Occupancy :</h1>
              <h1 className="font-semibold italic">{userInfo.max_occupancy}</h1>
            </div>
            <div className="w-full flex my-1 gap-4">
              <h1>Price per Night :</h1>
              <h1 className="font-semibold italic">
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                }).format(userInfo.price_per_night)}
              </h1>
            </div>
            <div className="w-full flex my-1 gap-4">
              <h1>Room Size :</h1>
              <h1 className="font-semibold italic">{userInfo.room_size}</h1>
            </div>
            <div className="w-full flex my-1 gap-4">
              <h1>Room Amenities :</h1>
              <h1 className="font-semibold italic">
                {userInfo.amenities.join(", ")}
              </h1>
            </div>
            <div className="w-full flex my-1 gap-4">
              <h1>Room Created Date :</h1>
              <h1 className="font-semibold italic">
                {moment(new Date(userInfo.createdAt)).fromNow()}
              </h1>
            </div>
          </div>
          <Button
            as={Link}
            href={`/admin/rooms/edit/${userInfo.id}`}
            className="bg-carton text-black my-10 mx-auto font-semibold"
          >
            Edit This Room Details
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default AdminRoomDetail;
