"use client";
import React from "react";
import { Button, Card, CardBody, CardFooter, Image } from "@heroui/react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

type HeroThree = {
  searchQuery: string;
  Rooms:
    | {
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
      }[]
    | undefined;
};

const HeroThree = ({ searchQuery, Rooms }: HeroThree) => {
  const Popular = Rooms ? Rooms.slice(-8) : [];
  const Filtered = searchQuery
    ? Popular.filter((item) => {
        return (
          item.name.includes(searchQuery) ||
          item.price_per_night.toString().includes(searchQuery)
        );
      })
    : Popular;

  return (
    <div className="text-center w-full">
      <h1 className="text-2xl font-semibold my-5">Most Popular Room</h1>
      <h1 className="text-medium font-semibold">
        Wondering which room to book?
      </h1>
      <p className="text-small my-3 md:w-[60%] mx-auto w-[95%]">
        Here are the most popular and highly reserved options, loved for their
        extra comfort, stylish furnishings, and premium amenities. Whether you
        seek luxury, space, or budget-friendly elegance, these rooms guarantee a
        relaxing and unforgettable stay
      </p>
      <div className="md:w-[90%] w-[95%] mx-auto gap-3 grid grid-cols-2 md:grid-cols-4">
        {Filtered.map((item, index) => (
          <Card
            key={index}
            isPressable
            shadow="sm"
          >
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.name}
                className="w-full object-cover h-[140px]"
                radius="lg"
                shadow="sm"
                src={item.image}
                width="100%"
              />
            </CardBody>
            <CardFooter className="text-small flex gap-3 justify-between">
              <p className="text-default-500 font-semibold text-sm md:text-medium">
                {item.name}
              </p>
              <p className="text-default-500">
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                }).format(item.price_per_night)}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Button
        as={Link}
        href="/rooms"
        className="bg-carton my-4 text-black px-10 font-semibold"
      >
        View All Rooms
        <FaArrowRightLong color="black" />
      </Button>
    </div>
  );
};

export default HeroThree;
