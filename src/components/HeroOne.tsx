"use client";
import { Button } from "@chakra-ui/react";
import { Input } from "@heroui/react";
import React, { Dispatch, SetStateAction } from "react";
import TypingEffect from "./TypingEffect";
import Link from "next/link";

type HeroProps = {
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

const HeroOne = ({ setSearchQuery }: HeroProps) => {
  return (
    <div className="HeroOneStyle ">
      <div className="bg-black bg-opacity-50  w-full md:w-[35%] p-5">
        <div className="h-24">
          <TypingEffect
            styling="text-5xl italic font-semibold text-white"
            letters="HOTEL ROOM RESERVATION"
          />
        </div>

        <Input
          label="Search for condusive rooms"
          className="border-2 mt-10 border-carton rounded-2xl"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchQuery(e.target.value);
          }}
        />
        <h1 className="text-2xl italic font-semibold text-white">
          Experience Luxury & Comfort <br /> Book Your Perfect Stay Today!
        </h1>
        <p className="text-[0.7rem] text-white">
          Discover a seamless hotel room reservation experience with our
          platform. Browse a variety of luxurious rooms, from cozy standard
          options to premium suites. Enjoy world-class amenities, easy booking,
          and exceptional service—all designed for your comfort and convenience.
        </p>
        <div>
          <h1 className="my-3 text-xl italic text-white font-semibold underline underline-offset-4">
            Home
          </h1>
          <div className="grid grid-cols-3 gap-3">
            <Link href={"/rooms"}>
              <Button
                className="text-white bg-transparent border-2 border-carton w-full"
                variant={"outline"}
              >
                Deluxe
              </Button>
            </Link>
            <Link href={"/rooms"}>
              <Button
                className="text-white bg-transparent border-2 border-carton w-full"
                variant={"outline"}
              >
                Standard
              </Button>
            </Link>
            <Link href={"/rooms"}>
              <Button
                className="text-white bg-transparent border-2 border-carton w-full"
                variant={"outline"}
              >
                Suite
              </Button>
            </Link>
            <Link href={"/rooms"}>
              <Button
                className="text-white bg-transparent border-2 border-carton w-full"
                variant={"outline"}
              >
                Excute
              </Button>
            </Link>
            <Link href={"/rooms"}>
              <Button
                className="text-white bg-transparent border-2 border-carton w-full"
                variant={"outline"}
              >
                Penthouse
              </Button>
            </Link>
            <Link href={"/rooms"}>
              <Button
                className="text-white bg-transparent border-2 border-carton w-full"
                variant={"outline"}
              >
                Excutive
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroOne;
