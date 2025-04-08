"use client"
import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import React from "react";

const HeroFour = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold my-5">Amenities & Services:</h1>
      <p className="text-small md:w-[60%] w-[95%] mx-auto text-center">
        Experience a seamless blend of relaxation and luxury with our premium
        amenities and services. Stay connected with high-speed Wi-Fi, unwind in
        our refreshing pool, rejuvenate with world-class spa treatments, and
        savor delicious meals at our fine-dining restaurant. Whether you`re here
        for business or leisure, we ensure a stay filled with comfort,
        convenience, and unforgettable moments.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-5 md:w-[90%] mx-auto w-[95%]">
        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              alt={"free-wifi"}
              className="w-full object-cover"
              src={"/wifi.jpg"}
              width={100}
              height={100}
            />
          </CardBody>
          <CardFooter className="text-small  justify-between">
            <p className="text-default-500 font-semibold text-lg">
              Free WI-FI
            </p>
          </CardFooter>
        </Card>
        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              alt={"pool"}
              className="w-full object-cover"
              src={"/pool.jpg"}
              width={100}
              height={100}
            />
          </CardBody>
          <CardFooter className="text-small  justify-between">
            <p className="text-default-500 font-semibold text-lg">Pool</p>
          </CardFooter>
        </Card>
        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              alt={"spa"}
              className="w-full object-cover"
              src={"/spa.jpg"}
              width={100}
              height={100}
            />
          </CardBody>
          <CardFooter className="text-small  justify-between">
            <p className="text-default-500 font-semibold text-lg">Spa</p>
          </CardFooter>
        </Card>
        <Card shadow="sm">
          <CardBody className="overflow-visible p-0">
            <Image
              alt={"restaurant"}
              className="w-full object-cover"
              src={"/restaurant.jpg"}
              width={100}
              height={100}
            />
          </CardBody>
          <CardFooter className="text-small  justify-between">
            <p className="text-default-500 font-semibold text-lg">
              Restaurant
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default HeroFour;
