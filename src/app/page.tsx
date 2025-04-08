"use client";
import HeroFive from "@/components/HeroFive";
import HeroFour from "@/components/HeroFour";
import HeroOne from "@/components/HeroOne";
import HeroThree from "@/components/HeroThree";
import HeroTwo from "@/components/HeroTwo";
import { useEffect, useState } from "react";
import { GetReserveItem, ReseveTesty } from "./api/Action";

type TestimonyProps = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  reservationId: string;
  rating: number;
  reservation: {
    user: {
      id: string;
      role: string;
      firstname: string | null;
      lastname: string | null;
      email: string;
      imageUrl: string;
      createdAt: Date;
      updatedAt: Date;
    };
    room: {
      name: string;
      id: string;
      createdAt: Date;
      updatedAt: Date;
      description: string;
      image: string;
      price_per_night: number;
      room_size: string;
      bed_type: string;
      max_occupancy: number;
      amenities: string[];
    };
  };
};

type AllRooms = {
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

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [Testimony, setTestimony] = useState<TestimonyProps[] | undefined>([]);
  const [Rooms, setRooms] = useState<AllRooms | undefined>([]);

  useEffect(() => {
    const getReseveTesty = async () => {
      const testy = await ReseveTesty();
      const rooms = await GetReserveItem();
      setTestimony(testy);
      setRooms(rooms)
    };
    getReseveTesty();
  }, []);
  return (
    <div>
      <HeroOne setSearchQuery={setSearchQuery} />
      <HeroTwo />
      <HeroThree searchQuery={searchQuery} Rooms={Rooms}/>
      <HeroFour />
      <HeroFive TestimonyInfo={Testimony} />
    </div>
  );
}
