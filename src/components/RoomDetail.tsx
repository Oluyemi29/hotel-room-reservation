"use client";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import moment from "moment";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRange } from "react-date-range";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MakeReservation } from "@/app/api/Payment";
import { eachDayOfInterval } from "date-fns";

type roomInfoProps = {
  roomInfo: {
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
    Reservation: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      startDate: string;
      endDate: string;
      roomId: string;
      userId: string;
      price: number;
      status: string;
      paymentIntentId: string;
      clientSecretId: string;
    }[];
  };
};

const RoomDetail = ({ roomInfo }: roomInfoProps) => {
  const { Reservation } = roomInfo;
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(
    roomInfo.price_per_night
  );
  let reserveDateRanges: Date[] = [];

  Reservation.forEach((eachReserved) => {
    const rangesDates = eachDayOfInterval({
      start: new Date(eachReserved.startDate),
      end: new Date(eachReserved.endDate),
    });
    reserveDateRanges = [...reserveDateRanges, ...rangesDates];
  });
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  if (!user) {
    return redirect("/");
  }
  const handleReservation = async () => {
    
    const { startDate, endDate } = state;
    if (startDate === endDate) {
      toast.error("Kindly select the start and end Date of reservation");
      return;
    }
    if (startDate.getDate() >= endDate.getDate()) {
      toast.error("Start Date must not be greater than End Date");
      return;
    }
    setLoading(true);
    const request = await MakeReservation({
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      roomId: roomInfo.id,
      userId: user.id,
      price: totalPrice,
    });
    if (request === true) {
      toast.success("Proceed to Payment to activate ur reservation");
      return redirect(`/rooms/checkout/${roomInfo.id}`);
    }
    setLoading(false);
  };
  return (
    <div>
      <Card className="p-5 flex md:flex-row flex-col justify-between gap-5">
        <div className="w-full">
          <Image
            src={roomInfo.image}
            alt={roomInfo.bed_type}
            width={100}
            height={100}
            priority
            quality={100}
            className="md:w-[80%] w-full rounded-lg mx-auto my-5"
          />
        </div>
        <div className="w-full text-default-800">
          <h1 className="text-xl font-bold underline underline-offset-4 italic">
            Room Details
          </h1>
          <div className="flex flex-col gap-3">
            <div className="w-full flex md:text-[0.9rem] text-[0.8rem] my-1 mt-7 gap-4">
              <h1>Name :</h1>
              <h1 className="font-semibold italic">{roomInfo.name}</h1>
            </div>
            <div className="w-full flex md:text-[0.9rem] text-[0.8rem] my-1 gap-4">
              <h1>Bed Type :</h1>
              <h1 className="font-semibold italic">{roomInfo.bed_type}</h1>
            </div>
            <div className="w-full flex md:text-[0.9rem] text-[0.8rem] flex-col my-1 gap-1">
              <h1>Room Description :</h1>
              <h1 className="font-semibold italic">{roomInfo.description}</h1>
            </div>
            <div className="w-full flex md:text-[0.9rem] text-[0.8rem] my-1 gap-4">
              <h1>Max Occupancy :</h1>
              <h1 className="font-semibold italic">{roomInfo.max_occupancy}</h1>
            </div>
            <div className="w-full flex md:text-[0.9rem] text-[0.8rem] my-1 gap-4">
              <h1>Price per Night :</h1>
              <h1 className="font-semibold italic">
                {new Intl.NumberFormat("en-NG", {
                  style: "currency",
                  currency: "NGN",
                }).format(roomInfo.price_per_night)}
              </h1>
            </div>
            <div className="w-full flex md:text-[0.9rem] text-[0.8rem] my-1 gap-4">
              <h1>Room Size :</h1>
              <h1 className="font-semibold italic">{roomInfo.room_size}</h1>
            </div>
            <div className="w-full flex md:text-[0.9rem] text-[0.8rem] flex-col my-1 gap-1">
              <h1>Room Amenities :</h1>
              <h1 className="font-semibold italic">
                {roomInfo.amenities.join(", ")}
              </h1>
            </div>
            <div className="w-full flex md:text-[0.9rem] text-[0.8rem] my-1 gap-4">
              <h1>Room Created Date :</h1>
              <h1 className="font-semibold italic">
                {moment(new Date(roomInfo.createdAt)).fromNow()}
              </h1>
            </div>
          </div>
          <div className="w-full">
            <DateRange
              ranges={[state]}
              onChange={(value) => {
                setState((prevData) => {
                  return {
                    ...prevData,
                    startDate: value.selection.startDate as Date,
                    endDate: value.selection.endDate as Date,
                    key: value.selection.key as string,
                  };
                });
                setTotalPrice(
                  value.selection.endDate && value.selection.startDate
                    ? roomInfo.price_per_night *
                        (value.selection.endDate.getDate() -
                          value.selection.startDate.getDate())
                    : roomInfo.price_per_night
                );
              }}
              date={new Date()}
              showDateDisplay={false}
              minDate={new Date()}
              disabledDates={reserveDateRanges}
              direction="vertical"
            />
          </div>
          <p className="text-[0.7rem] text-orange-400">Pick the start and the end reservation Date here</p>
          <div className="flex flex-row justify-between items-center">
            <h1 className=" text-lg font-semibold italic">
              Total Price :{" "}
              {new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(totalPrice)}
            </h1>
            {loading ? (
              <>
                <Button
                  className="bg-carton text-black mt-5 font-semibold px-5"
                  disabled
                >
                  <AiOutlineLoading3Quarters
                    className="animate-spin"
                    size={15}
                  />
                  Processing...
                </Button>
              </>
            ) : (
              <>
                <Button
                  type="button"
                  onPress={() => handleReservation()}
                  className="bg-carton text-black mt-5 font-semibold px-5"
                >
                  Make Payment
                </Button>
              </>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RoomDetail;
