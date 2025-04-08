"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Tooltip,
} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosBed } from "react-icons/io";
import { TbRulerMeasure } from "react-icons/tb";
import SearchBar from "./Search";

type AllroomDetailsProps = {
  AllroomDetails: {
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
  }[];
};

const Allroom = ({ AllroomDetails }: AllroomDetailsProps) => {
  const [filterBy, setFilteredBy] = useState({
    name: "",
    value: "",
  });
  const [searchRoom, setSearchRoom] = useState("");

  const Filtered = AllroomDetails.filter((eachRoom) => {
    if (searchRoom) {
      if (filterBy.value === "name") {
        return eachRoom.name.toLowerCase().includes(searchRoom.toLowerCase());
      } else if (filterBy.value === "bed_type") {
        return eachRoom.bed_type
          .toLowerCase()
          .includes(searchRoom.toLowerCase());
      } else if (filterBy.value === "description") {
        return eachRoom.description
          .toLowerCase()
          .includes(searchRoom.toLowerCase());
      } else if (filterBy.value === "max_occupancy") {
        return eachRoom.max_occupancy
          .toString()
          .toLowerCase()
          .includes(searchRoom.toLowerCase());
      } else if (filterBy.value === "price_per_night") {
        return eachRoom.price_per_night
          .toString()
          .toLowerCase()
          .includes(searchRoom.toLowerCase());
      } else if (filterBy.value === "room_size") {
        return eachRoom.room_size
          .toLowerCase()
          .includes(searchRoom.toLowerCase());
      } else if (filterBy.value === "amenities") {
        const Amenities = eachRoom.amenities.map((eachItem) => {
          return eachItem;
        });
        return Amenities.toString()
          .toLowerCase()
          .includes(searchRoom.toLowerCase());
      } else {
        return eachRoom.name.toLowerCase().includes(searchRoom.toLowerCase());
      }
    } else {
      return AllroomDetails;
    }
  });
  return (
    <div>
      <h1 className="text-3xl text-white my-4 font-semibold italic text-center">
        All Rooms
      </h1>
      <SearchBar setFilteredBy={setFilteredBy} setSearchRoom={setSearchRoom} />
      <div className="w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {Filtered.map((eachRoom, index) => {
          return (
            <Card
              key={index}
              shadow="sm"
            >
              <CardBody className="overflow-visible p-0">
                <Image
                  alt={"title"}
                  className="w-full object-cover h-[20rem]"
                  src={eachRoom.image as string}
                  width={100}
                  height={100}
                />
              </CardBody>
              <CardFooter className="text-small flex flex-col items-start gap-2">
                <h1 className="text-default-800 font-semibold">
                  {eachRoom.name}
                </h1>
                <h1 className="text-default-800 inline-flex">
                  <IoIosBed size={22} className="mr-3" /> {eachRoom.bed_type}
                </h1>
                <h1 className="text-default-800 inline-flex">
                  <TbRulerMeasure className="mr-3" size={22} />
                  {eachRoom.room_size}
                </h1>
                <Divider orientation="horizontal" className="bg-default-800" />
                <div className="w-full py-2 justify-between flex items-center">
                  <p className="text-default-800">
                    {new Intl.NumberFormat("en-NG", {
                      style: "currency",
                      currency: "NGN",
                    }).format(eachRoom.price_per_night)}
                    / night
                  </p>
                  <Tooltip content={"view full details"} placement="top">
                    <Button
                      as={Link}
                      className="bg-carton text-black font-semibold"
                      href={`/rooms/${eachRoom.id}`}
                      size="sm"
                    >
                      View Full Details
                    </Button>
                  </Tooltip>
                </div>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Allroom;
