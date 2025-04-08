// components/emails/BookingConfirmation.tsx

import { Html } from "@react-email/html";
import { Head } from "@react-email/head";
import { Container } from "@react-email/container";
import { Img } from "@react-email/img";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Tailwind } from "@react-email/tailwind";

type BookingProps = {
  username: string;
  roomimage: string;
  roomname: string;
  roompricepernight: number;
  bedtype: string;
  roomsize: string;
  maxoccupancy: number;
  amenites: string[];
  startdate: string;
  enddate: string;
  totalprice: number;
};

export default function BookingConfirmation({
  username,
  roomimage,
  roomname,
  roompricepernight,
  bedtype,
  roomsize,
  maxoccupancy,
  amenites,
  startdate,
  enddate,
  totalprice,
}: BookingProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Container className="bg-[#f4f4f4] p-4">
          <Section className="max-w-[600px] mx-auto bg-white rounded-lg overflow-hidden shadow-md">
            <Section className="bg-[#2c3e50] text-white text-center p-5 text-xl font-bold">
              Booking Confirmation
            </Section>
            <Img src={roomimage} alt="Room Image" className="w-full object-cover" />
            <Section className="p-6">
              <Text className="text-lg font-semibold">Dear {username},</Text>
              <Text className="text-base text-gray-700">
                Thank you for choosing our hotel! Here are the details of your booking:
              </Text>

              <Section className="bg-[#f9f9f9] p-4 rounded-md mt-4">
                <Text><strong>Room Name:</strong> {roomname}</Text>
                <Text><strong>Price per Night:</strong> #{roompricepernight}</Text>
                <Text><strong>Bed Type:</strong> {bedtype}</Text>
                <Text><strong>Room Size:</strong> {roomsize}</Text>
                <Text><strong>Max Occupancy:</strong> {maxoccupancy} guests</Text>
                <Text><strong>Amenities:</strong> {amenites}</Text>
                <Text><strong>Check-in Date:</strong> {startdate}</Text>
                <Text><strong>Check-out Date:</strong> {enddate}</Text>
                <Text><strong>Total Price:</strong> #{totalprice}</Text>
              </Section>

              <Text className="text-sm mt-5 text-gray-600">
                If you have any questions, feel free to contact us.
              </Text>
            </Section>

            <Section className="bg-[#2c3e50] text-white text-center text-sm py-4">
              &copy; 2025 Dev Oluyemi. All Rights Reserved.
            </Section>
          </Section>
        </Container>
      </Tailwind>
    </Html>
  );
}
