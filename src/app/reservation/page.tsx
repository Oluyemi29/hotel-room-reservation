import Reservation from "@/components/Reservation";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Reservation",
};

const page = async () => {
  noStore();
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const reserveMade = await prisma.reservation.findMany({
    where: {
      userId: userId,
      status: "Completed",
    },
    include: {
      room: true,
      Review: {
        include: {
          reservation: {
            include: {
              user: true,
              room: true,
            },
          },
        },
      },
    },
  });
  return (
    <div>
      <Reservation reserveMade={reserveMade} />
    </div>
  );
};

export default page;
