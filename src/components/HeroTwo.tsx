"use client"
import Image from "next/image";
import React from "react";

const HeroTwo = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold my-5">Welcome to Crystal Hotel</h1>
      <p className="text-small md:w-[60%] w-[95%] mx-auto text-center">
        Experience luxury, comfort, and exceptional hospitality at Crystal Hotel. Whether you`re here for business or leisure, our elegant rooms
        and world-class amenities ensure a memorable stay. We`re dedicated to
        helping you find the perfect stay at the best possible price. Browse our
        wide selection of hotels and book your dream vacation today.From
        beautifully designed interiors to top-tier dining and personalized
        services, we strive to create an experience that feels like home—only
        better. Relax, unwind, and let us take care of the rest while you enjoy
        the finest in comfort and style. Your perfect getaway starts here
      </p>
      <div className="grid grid-cols-3 gap-3 my-5 md:w-[90%] mx-auto w-[95%]">
        <Image
          src={"/boutique.jpg"}
          alt="rooms"
          width={100}
          height={100}
          priority
          quality={100}
          className="rounded-lg w-full"
        />
        <Image
          src={"/luxurious.jpg"}
          alt="rooms"
          width={100}
          height={100}
          priority
          quality={100}
          className="rounded-lg w-full"
        />
        <Image
          src={"/opulent.jpg"}
          alt="rooms"
          width={100}
          height={100}
          priority
          quality={100}
          className="rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default HeroTwo;
