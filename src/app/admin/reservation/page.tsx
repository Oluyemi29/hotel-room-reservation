import { CheckUserRole } from "@/app/api/check-admin/IsAdmin";
import AdminReservation from "@/components/AdminReservation";
import { prisma } from "@/lib/db";
import { Metadata } from "next";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Admin Reservation",
};

const page = async () => {
  noStore();
  await CheckUserRole();
  const AllReservation = await prisma.reservation.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <AdminReservation AllReservation={AllReservation} />
    </div>
  );
};

export default page;
