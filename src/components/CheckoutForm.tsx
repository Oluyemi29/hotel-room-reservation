"use client";
import { Button } from "@heroui/react";
import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import { UpdateReservationStatus } from "@/app/api/Payment";
import { ImSpinner3 } from "react-icons/im";

type CheckoutFormProp = {
  clientSecretId: string;
  paymentIntentId: string;
  roomId: string;
  price: number;
  setPaymentDone: React.Dispatch<React.SetStateAction<boolean>>;
};

const CheckoutForm = ({
  clientSecretId,
  paymentIntentId,
  roomId,
  price,
  setPaymentDone,
}: CheckoutFormProp) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }
    if (!clientSecretId) {
      return;
    }
  }, [stripe, clientSecretId]);
  if (!stripe || !elements) {
    return;
  }

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const confirmPayment = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });
    if (!confirmPayment.error) {
      toast.success("Payment successfull");
      await UpdateReservationStatus({
        paymentIntentId: paymentIntentId,
        roomId,
      });
      setPaymentDone(true);
    } else {
      toast.error("An Error Occur when making payment");
    }
    setLoading(false);
  };
  return (
    <div>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => handlePayment(e)}
      >
        <div>
          <h1 className="font-semibold text-center">
            Enter your details to complete checkout
          </h1>
          <h1 className="text-sm text-center my-2">Payment Infomation</h1>
        </div>
        <PaymentElement
          className="w-full"
          id="payment-element"
          options={{ layout: "tabs" }}
        />
        <h1 className="text-center italic my-4 font-bold">
          Total :
          {new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(price)}
        </h1>
        {loading ? (
          <Button
            disabled={true}
            type="button"
            className="bg-green-700 w-full text-white font-bold text-lg"
          >
            <ImSpinner3 size={18} className="animate-spin" color="white" />
            Process...
          </Button>
        ) : (
          <Button
            type="submit"
            className="bg-green-700 w-full text-white font-bold text-lg"
          >
            Pay Now
          </Button>
        )}
      </form>
    </div>
  );
};

export default CheckoutForm;
