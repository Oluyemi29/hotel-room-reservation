"use client";
import React, { useState } from "react";
import { loadStripe, StripeElementsOptions } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import CheckoutForm from "./CheckoutForm";

type CheckOutProps = {
  PUBLIC_KEY: string;
  CheckOutData: {
    price: number;
    paymentIntentId: string;
    clientSecretId: string;
  };
  roomId: string;
};

const CheckOut = ({ PUBLIC_KEY, CheckOutData, roomId }: CheckOutProps) => {
  const { clientSecretId, paymentIntentId, price } = CheckOutData;
  const [paymentDone, setPaymentDone] = useState(false);

  const stripePromise = loadStripe(PUBLIC_KEY);

  const Option: StripeElementsOptions = {
    clientSecret: clientSecretId,
    appearance: {
      theme: "stripe",
      labels: "floating",
    },
  };

  return (
    <div className="md:w-[40%] w-full my-10 mx-auto">
      <Card className="p-5 text-default-800 w-full">
        {CheckOutData.clientSecretId && (
          <>
            {paymentDone ? (
              <>
                <Image
                  src={
                    "https://i.pinimg.com/736x/1d/53/77/1d53771035f469040663206580b65ce4.jpg"
                  }
                  alt="done"
                  width={100}
                  height={100}
                  priority
                  quality={100}
                  className="w-20 h-20 rounded-full mt-5 mx-auto"
                />
                <Button
                  className="mx-auto mt-5 bg-carton text-black teext-lg font-semibold"
                  as={Link}
                  href="/reservation"
                >
                  See your Reservation
                </Button>
              </>
            ) : (
              <>
                <Elements options={Option} stripe={stripePromise}>
                  <CheckoutForm
                    clientSecretId={clientSecretId}
                    paymentIntentId={paymentIntentId}
                    price={price}
                    roomId={roomId}
                    setPaymentDone={setPaymentDone}
                  />
                </Elements>
              </>
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default CheckOut;
