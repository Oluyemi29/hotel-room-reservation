"use server";
import { prisma } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import Stripe from "stripe";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import BookingConfirmation from "@/components/emails/ReservedRoomEmail";
import SubscribeConfirmation from "@/components/emails/SubscribeConfirmation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-02-24.acacia",
});

type ReservationProps = {
  startDate: string;
  endDate: string;
  roomId: string;
  userId: string;
  price: number;
};

export const MakeReservation = async ({
  startDate,
  endDate,
  roomId,
  userId,
  price,
}: ReservationProps) => {
  if (!startDate || !endDate || !roomId || !userId || !price) {
    return redirect("/");
  }

  const checkOrder = await prisma.reservation.findFirst({
    where: {
      userId: userId,
      roomId: roomId,
      status: "Pending",
    },
  });
  if (checkOrder) {
    const retrieveIntent = await stripe.paymentIntents.retrieve(
      checkOrder.paymentIntentId
    );
    const updatedIntent = await stripe.paymentIntents.update(
      retrieveIntent.id,
      {
        amount: price * 100,
        currency: "ngn",
      }
    );
    if (updatedIntent.client_secret) {
      const { id, client_secret } = updatedIntent;
      await prisma.reservation.update({
        where: {
          userId: userId,
          roomId: roomId,
          status: "Pending",
          paymentIntentId: id,
        },
        data: {
          userId: userId,
          roomId: roomId,
          status: "Pending",
          startDate: startDate,
          endDate: endDate,
          clientSecretId: client_secret ?? "",
          price: price,
        },
      });
      return true;
    }
    return false;
  } else {
    const createIntent = await stripe.paymentIntents.create({
      amount: price * 100,
      currency: "ngn",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    if (createIntent.client_secret) {
      await prisma.reservation.create({
        data: {
          clientSecretId: createIntent.client_secret,
          endDate: endDate,
          startDate: startDate,
          paymentIntentId: createIntent.id,
          price: price,
          roomId: roomId,
          userId: userId,
          status: "Pending",
        },
      });
      return true;
    }
    return false;
  }
};

type UpdateReservationProps = {
  paymentIntentId: string;
  roomId: string;
};

export const UpdateReservationStatus = async ({
  paymentIntentId,
  roomId,
}: UpdateReservationProps) => {
  const { userId } = await auth();
  if (!userId) {
    return redirect("/");
  }
  if (!paymentIntentId || !roomId) {
    return redirect("/");
  }
  const reserveUpdated = await prisma.reservation.update({
    where: {
      paymentIntentId: paymentIntentId,
      userId: userId,
      roomId: roomId,
      status: "Pending",
    },
    data: {
      status: "Completed",
    },
    include: {
      room: true,
      user: true,
    },
  });
  const { endDate, price, startDate, room, user } = reserveUpdated;
  
  const html = await render(
    BookingConfirmation({
      username: user.firstname as string,
      roomimage: room.image,
      roomname: room.name,
      roompricepernight: room.price_per_night,
      bedtype: room.bed_type,
      roomsize: room.room_size,
      maxoccupancy: room.max_occupancy,
      amenites: room.amenities,
      startdate: new Date(startDate).toDateString(),
      enddate: new Date(endDate).toDateString(),
      totalprice: price,
    })
  );
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, 
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  });
  await transporter.sendMail({
    from: '"Dev Oluyemi 💻" <adedokunoluyemi1@gmail.com>',
    to: user.email,
    subject: "Reserved Room Details",
    replyTo: "no-reply@example.com",
    html,
  });
  revalidatePath("/reservation");
  return redirect("/reservation");
};

export const Subscribe = async (email: string) => {
  const siteLink = process.env.NEXT_PUBLIC_SITE_URL as string;
  const html = await render(
    SubscribeConfirmation({
      siteLink: siteLink as string,
    })
  );
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASS,
    },
  });
  await transporter.sendMail({
    from: '"Dev Oluyemi 💻" <adedokunoluyemi1@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Subscription Confirmation", // Subject line
    replyTo: "no-reply@example.com",
    html, // html body
  });
  const alreadySubscribe = await prisma.subscribe.findFirst({
    where: {
      email,
    },
  });
  if (alreadySubscribe) {
    return true;
  }
  await prisma.subscribe.create({
    data: {
      email: email,
    },
  });
  return true;
};
