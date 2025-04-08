import RoomDetail from "@/components/RoomDetail";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const roomName = await prisma.room.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
    },
  });

  return {
    title: roomName ? ` ${roomName.name} Details` : "Room Details",
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  if (id.length < 24 || id.length > 24) {
    return redirect("/");
  }
  const roomInfo = await prisma.room.findUnique({
    where: {
      id,
    },
    include: {
      Reservation: true,
    },
  });
  if (!roomInfo) {
    return redirect("/");
  }
  return (
    <div>
      <RoomDetail roomInfo={roomInfo} />
    </div>
  );
};

export default page;
