import React from "react";
import { CheckUserRole } from "../api/check-admin/IsAdmin";
import Summary from "@/components/Summary";
import { Metadata } from "next";
import { prisma } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Admin Dashboard",
};

const page = async () => {
  noStore();
  await CheckUserRole();
  const totalReserve = await prisma.reservation.count();
  const skipumber = totalReserve > 7 ? totalReserve - 7 : 0;
  const [
    User,
    Reservation,
    Review,
    Room,
    CompleteReservePayment,
    PendingReservePayment,
    AllReservation,
  ] = await Promise.all([
    await prisma.user.findMany({}),
    await prisma.reservation.findMany({}),
    await prisma.review.findMany({}),
    await prisma.room.findMany({}),
    await prisma.reservation.findMany({ where: { status: "Completed" } }),
    await prisma.reservation.findMany({ where: { status: "Pending" } }),
    await prisma.reservation.findMany({
      skip: skipumber,
      orderBy: { createdAt: "asc" },
    }),
  ]);
  return (
    <div>
      <Summary
        User={User.length}
        Reservation={Reservation.length}
        Review={Review.length}
        Room={Room.length}
        CompleteReservePayment={CompleteReservePayment.length}
        PendingReservePayment={PendingReservePayment.length}
        AllReservation={AllReservation}
      />
    </div>
  );
};

export default page;
