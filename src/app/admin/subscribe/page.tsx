import { CheckUserRole } from "@/app/api/check-admin/IsAdmin";
import Subscriber from "@/components/Subscribe";
import { prisma } from "@/lib/db";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Subscriber",
};
const page = async () => {
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
