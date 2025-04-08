"use server";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const IsAdmin = async () => {
  const { userId } = await auth();
  if (!userId) {
    return false;
  }
  const user = await prisma.user.findUnique({
    where: {
      id: userId as string,
    },
    select: {
      role: true,
    },
  });
  if (!user || user.role !== "ADMIN") {
    return false;
  }
  return true;
};

type UploadRoomProps = {
  Amenity: string[];
  bedType: string;
  description: string;
  imageUrl: string;
  maxOccupancy: string;
  name: string;
  price: string;
  size: string;
};

export const CreateRoom = async ({
  Amenity,
  bedType,
  description,
  imageUrl,
  maxOccupancy,
  name,
  price,
  size,
}: UploadRoomProps) => {
  await prisma.room.create({
    data: {
      bed_type: bedType,
      description: description,
      image: imageUrl,
      max_occupancy: Math.floor(Number(maxOccupancy)),
      name: name,
      price_per_night: Math.floor(Number(price)),
      room_size: size,
      amenities: Amenity,
    },
  });
  revalidatePath("/admin/rooms");
  return true;
};

type EditRoomProps = {
  Amenity: string[];
  bedType: string;
  description: string;
  imageUrl: string;
  maxOccupancy: string;
  name: string;
  price: string;
  size: string;
  id: string;
};

export const UpdateRoom = async ({
  Amenity,
  bedType,
  description,
  imageUrl,
  maxOccupancy,
  name,
  price,
  size,
  id,
}: EditRoomProps) => {
  await prisma.room.update({
    where: {
      id,
    },
    data: {
      amenities: Amenity,
      bed_type: bedType,
      description: description,
      image: imageUrl,
      max_occupancy: Math.floor(Number(maxOccupancy)),
      name: name,
      price_per_night: Math.floor(Number(price)),
      room_size: size,
    },
  });
  revalidatePath("/admin/rooms");
  redirect("/admin/rooms");
};

export const DeletingRoom = async (id: string) => {
  if (!id) {
    return false;
  }
  const checkReserve = await prisma.reservation.findMany({
    where: {
      roomId: id,
    },
  });

  const finalCheck = checkReserve.find((EachReserve) => {
    return (
      EachReserve.status === "Completed" &&
      new Date(EachReserve.endDate).getDate() > new Date().getDate()
    );
  });

  if (finalCheck) {
    return false;
  }
  await prisma.room.delete({
    where: {
      id,
    },
  });
  revalidatePath("/admin/rooms");
  return true;
};

type ReviewProps = {
  reservationId: string;
  title: string;
  description: string;
  rating: number;
};
export const CommentReview = async ({
  rating,
  reservationId,
  title,
  description,
}: ReviewProps) => {
  if (!title || !description || !reservationId) {
    return false;
  }
  await prisma.review.create({
    data: {
      description: description,
      rating: rating ?? 0,
      title: title,
      reservationId: reservationId,
    },
  });
  revalidatePath("/reservation");
  return true;
};

export const UserDeleteReview = async (id: string) => {
  if (!id) {
    return false;
  }
  await prisma.review.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/reservation");
  revalidatePath("/admin/review");
  return true;
};

export const DeleteReservation = async (id: string) => {
  if (!id) {
    return false;
  }
  await prisma.reservation.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/admin/reservation");
  revalidatePath("/reservation");
  return true;
};

export const ReseveTesty = async () => {
  const testy = await prisma.review.findMany({
    include: {
      reservation: {
        include: {
          room: true,
          user: true,
        },
      },
    },
  });
  return testy;
};

export const GetReserveItem = async () => {
  const room = await prisma.room.findMany({});
  return room;
};
