"use client";
import { Card } from "@heroui/react";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { FaUserLarge } from "react-icons/fa6";
import dynamic from "next/dynamic";
import { MdOutlineBedroomChild } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { MdOutlinePending } from "react-icons/md";
import { VscFolderActive } from "react-icons/vsc";
import { FcExpired } from "react-icons/fc";

type SummaryProps = {
  User: number;
  Reservation: number;
  Review: number;
  Room: number;
  CompleteReservePayment: number;
  PendingReservePayment: number;
  AllReservation: {
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

const Summary = ({
  CompleteReservePayment,
  PendingReservePayment,
  Reservation,
  Review,
  Room,
  User,
  AllReservation,
}: SummaryProps) => {
  const ReserveActive = AllReservation.filter((Reserve) => {
    return new Date(Reserve.endDate).getDate() > new Date().getDate();
  });
  const ReserveExpired = AllReservation.filter((Reserve) => {
    return new Date(Reserve.endDate).getDate() < new Date().getDate();
  });
  const data = AllReservation.map((Reserve) => {
    return {
      amount: Reserve.price,
      date: new Intl.DateTimeFormat("en-US").format(Reserve.createdAt),
    };
  });
  return (
    <div>
      <Card className="p-5 text-default-800">
        <h1 className="text-center font-semibold mb-5 underline underline-offset-4 text-lg italic">
          Room Stat
        </h1>
        <Card className="grid grid-cols-4 text-default-800 gap-5 items-center justify-center p-5">
          <Card className="p-4 flex flex-col gap-4 text-default-800">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-semibold">Total User</h1>
              <FaUserLarge size={18}/>
            </div>
            <h1 className="text-sm font-semibold">{User} Users</h1>
          </Card>
          <Card className="p-4 flex flex-col gap-4 text-default-800">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-semibold">Total Room</h1>
              <MdOutlineBedroomChild size={18}  />
            </div>
            <h1 className="text-sm font-semibold">{Room} Rooms</h1>
          </Card>
          <Card className="p-4 flex flex-col gap-4 text-default-800">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-semibold">Total Reservation</h1>
              <FaBookmark size={18}  />
            </div>
            <h1 className="text-sm font-semibold">{Reservation} Reservation</h1>
          </Card>
          <Card className="p-4 flex flex-col gap-4 text-default-800">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-semibold">Total Review</h1>
              <MdRateReview size={18}  />
            </div>
            <h1 className="text-sm font-semibold">{Review} Review</h1>
          </Card>
          <Card className="p-4 flex flex-col gap-4 text-default-800">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-semibold">
                Complete Reserve Payment
              </h1>
              <MdDone size={18}  />
            </div>
            <h1 className="text-sm font-semibold">
              {CompleteReservePayment} Completed
            </h1>
          </Card>
          <Card className="p-4 flex flex-col gap-4 text-default-800">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-semibold">Pending Reserve Payment</h1>
              <MdOutlinePending size={18}  />
            </div>
            <h1 className="text-sm font-semibold">
              {PendingReservePayment} Pending
            </h1>
          </Card>
          <Card className="p-4 flex flex-col gap-4 text-default-800">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-semibold">
                Total Active Reservation
              </h1>
              <VscFolderActive size={18}  />
            </div>
            <h1 className="text-sm font-semibold">
              {ReserveActive.length} Active
            </h1>
          </Card>
          <Card className="p-4 flex flex-col gap-4 text-default-800">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-semibold">
                Total Expired Reservation
              </h1>
              <FcExpired size={18} />
            </div>
            <h1 className="text-sm font-semibold">
              {ReserveExpired.length} Expired
            </h1>
          </Card>
        </Card>
        <div className="w-full flex my-10 justify-center">
          <Card className="p-5 text-default-800">
            <h1 className="text-lg font-semibold italic text-center my-5 underline underline-offset-4">
              Reservation Chart Graph
            </h1>
            <Card className="p-5">
              <LineChart
                width={800}
                height={400}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis dataKey="amount" />
                <Tooltip />
                <Legend />
                {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" /> */}
                <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
              </LineChart>
            </Card>
          </Card>
        </div>
      </Card>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Summary), {
  ssr: false,
});
