import { CheckUserRole } from "@/app/api/check-admin/IsAdmin";
import AdminUploadedRoom from "@/components/AdminUploadedRoom";
import { prisma } from "@/lib/db";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin - All Room",
};

const page = async () => {
  await CheckUserRole();
  const AllRooms = await prisma.room.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      Reservation: {
        select: {
          id: true,
          startDate: true,
          endDate: true,
          roomId: true,
          userId: true,
          price: true,
          status: true,
          paymentIntentId: true,
          clientSecretId: true,
        },
      },
    },
  });
  const NeededRoom = AllRooms.map((Each) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { createdAt, updatedAt, ...Others } = Each;

    return Others;
  });
  const Allreservation = await prisma.reservation.findMany({});
  return (
    <div>
      <AdminUploadedRoom
        AllRooms={NeededRoom}
        Allreservation={Allreservation}
      />
    </div>
  );
};

export default page;
