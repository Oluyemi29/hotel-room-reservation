// import Allroom from "@/components/Allroom";
import Allroom from "@/components/Allroom";
import Room from "@/components/Room";
import { prisma } from "@/lib/db";
import { Metadata } from "next";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";


export const metadata: Metadata = {
  title: "All Rooms",
};

const page = async () => {
  noStore()
  const AllroomDetails = await prisma.room.findMany({})
  return (
    <div>
      <Room />
      <Allroom AllroomDetails={AllroomDetails} />
    </div>
  );
};

export default page;
