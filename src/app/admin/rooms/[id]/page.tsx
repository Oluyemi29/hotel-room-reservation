import { CheckUserRole } from "@/app/api/check-admin/IsAdmin";
import AdminRoomDetail from "@/components/AdminRoomDetail";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  noStore();
  const { id } = await params;
  const room = await prisma.room.findUnique({
    where: { id },
    select: { name: true },
  });
  return {
    title: room?.name ? `${room.name} Details` : "Room Details",
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  await CheckUserRole();

  const id = (await params).id;
  if (id.length < 24 || id.length > 24) {
    return redirect("/");
  }

  const userInfo = await prisma.room.findUnique({
    where: {
      id,
    },
  });
  if (!userInfo) {
    return redirect("/");
  }
  return (
    <div>
      <AdminRoomDetail userInfo={userInfo} />
    </div>
  );
};

export default page;
