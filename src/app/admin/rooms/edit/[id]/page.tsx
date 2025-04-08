import { CheckUserRole } from "@/app/api/check-admin/IsAdmin";
import EditRoom from "@/components/EditRoom";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const room = await prisma.room.findUnique({
    where: { id },
    select: { name: true },
  });
  return {
    title: room?.name ? `Edit ${room.name} Room` : "Edit Room",
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  await CheckUserRole();
  const id = (await params).id;
  if (id.length < 24) {
    return redirect("/");
  }

  const EditRoomDetials = await prisma.room.findUnique({
    where: {
      id: id,
    },
  });
  if (!EditRoomDetials) {
    return redirect("/");
  }

  return (
    <div>
      <EditRoom EditRoomDetials={EditRoomDetials} />
    </div>
  );
};

export default page;
