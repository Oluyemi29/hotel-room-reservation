import CheckOut from "@/components/CheckOut";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
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
    title: roomName ? ` ${roomName.name} Checkout` : "Checkout",
  };
}

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  if (!id || id.length < 24 || id.length > 24) {
    return redirect("/");
  }

  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  const CheckOutData = await prisma.reservation.findFirst({
    where: {
      roomId: id,
      userId: userId,
      status: "Pending",
    },
    select: {
      paymentIntentId: true,
      clientSecretId: true,
      price: true,
    },
  });
  if (!CheckOutData) {
    return redirect("/");
  }

  return (
    <div>
      <CheckOut
        PUBLIC_KEY={process.env.STRIPE_PUBLIC_KEY as string}
        CheckOutData={CheckOutData}
        roomId={id}
      />
    </div>
  );
};

export default page;
