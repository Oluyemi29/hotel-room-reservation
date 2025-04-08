import React from "react";
import TypingEffect from "./TypingEffect";

const Room = () => {
  return (
    <div className="AllTheRooms ">
      <div className="py-32 bg-black bg-opacity-60">
        <div className="lg:h-auto md:h-24 h-44">
          <TypingEffect
            styling="text-5xl font-semibold italic text-white text-center"
            letters="BOOK THE WORLD BEST LUXURY HOTEL"
          />
        </div>
        <p className="text-[0.8rem] text-white text-center w-[95%] mt-4 md:w-[50%] mx-auto">
          We`re dedicated to helping you find the perfect stay at the best
          possible price. Browse our wide selection of hotels and book your
          dream vacation today
        </p>
      </div>
    </div>
  );
};

export default Room;
