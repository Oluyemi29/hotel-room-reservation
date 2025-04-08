"use client";
import { RatingGroup } from "@chakra-ui/react";
import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

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

type TestimonyInfoProps = {
  TestimonyInfo: TestimonyProps[] | undefined;
};

const HeroFive = ({TestimonyInfo}:TestimonyInfoProps) => {
  // const TestyNeeded = 
  const FilteredTesty = TestimonyInfo ? TestimonyInfo.slice(-3) : [];
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold my-5">Testimonial</h1>
      <p className="text-small md:w-[60%] w-[95%] mx-auto text-center">
        Hear from our valued guests Read real experiences from travelers who
        have enjoyed our hospitality. Whether it`s our luxurious rooms,
        exceptional service, or top-notch amenities, our guests share their
        honest feedback to help you make the best choice for your stay.
      </p>
      <div className="md:w-[90%] mx-auto grid grid-cols-1 mt-5 md:grid-cols-3 gap-5">
        {FilteredTesty.map((Testy, index) => {
          return (
            <Card key={index} className="w-full p-5">
              <div className="flex w-[50%] mx-auto flex-col items-center justify-center">
                <Image
                  src={Testy.reservation.user.imageUrl}
                  alt="pool"
                  width={100}
                  height={100}
                  priority
                  quality={100}
                  className="w-[20%] rounded-full"
                />
                <p className="text-[0.8rem] font-semibold text-default-500">
                  {Testy.reservation.user.firstname ?? "User"}
                </p>
                <p className="text-[0.7rem] font-semibold text-default-500">
                  {`${Testy.reservation.user.email.slice(
                    0,
                    3
                  )}...${Testy.reservation.user.email.slice(-10)}`}
                </p>
              </div>
              <Card className="p-5 mt-5">
                <div className="flex w-full flex-row gap-3">
                  <Image
                    src={Testy.reservation.room.image}
                    alt="pool"
                    width={100}
                    height={100}
                    priority
                    quality={100}
                    className="w-20 h-20 rounded-full"
                  />
                  <div className="text-start text-[0.8rem]">
                    <p className="text-default-500">
                      <span className="font-semibold text-[0.7rem]">
                        Room :{" "}
                      </span>
                      {Testy.reservation.room.name}
                    </p>
                    
                    <p className="text-default-500">
                      <span className="font-semibold text-[0.7rem]">
                        Review :{" "}
                      </span>
                      {Testy.title}
                    </p>

                    <p className="text-default-500">
                      <span className="font-semibold text-[0.7rem]">
                        Description :{" "}
                      </span>
                      {Testy.description}
                    </p>
                    <RatingGroup.Root
                      allowHalf
                      count={5}
                      defaultValue={Testy.rating}
                      size="md"
                      colorPalette={"orange"}
                      className="my-2"
                      readOnly
                    >
                      <RatingGroup.HiddenInput />
                      <RatingGroup.Control />
                    </RatingGroup.Root>
                  </div>
                </div>
              </Card>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HeroFive;
