import { CheckUserRole } from "@/app/api/check-admin/IsAdmin";
import Subscriber from "@/components/Subscribe";
import { prisma } from "@/lib/db";
import { Metadata } from "next";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Subscriber",
};
const page = async () => {
  noStore();
  await CheckUserRole();
  const SubscriberInfo = await prisma.subscribe.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      <Subscriber Subscriber={SubscriberInfo} />
    </div>
  );
};

export default page;
