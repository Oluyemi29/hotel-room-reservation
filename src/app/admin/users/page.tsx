import { CheckUserRole } from "@/app/api/check-admin/IsAdmin";
import AllUser from "@/components/AllUser";
import { prisma } from "@/lib/db";
import { Metadata } from "next";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "All User",
};

const page = async () => {
  noStore();
  await CheckUserRole();

  const allUser = await prisma.user.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <AllUser allUser={allUser} />
    </div>
  );
};

export default page;
