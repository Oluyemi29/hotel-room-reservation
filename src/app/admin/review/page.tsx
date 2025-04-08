import { CheckUserRole } from "@/app/api/check-admin/IsAdmin";
import Review from "@/components/Review";
import { prisma } from "@/lib/db";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Admin Review",
};

const page = async () => {
  await CheckUserRole();
  const AllReview = await prisma.review.findMany({
    orderBy: { createdAt: "desc" },
  });
  return <Review AllReview={AllReview} />;
};

export default page;
