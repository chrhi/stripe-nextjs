"use client";

import { useCheckout } from "@/hooks/use-checkout";
import type { FC } from "react";

import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  LinkAuthenticationElement,
  PaymentElement,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("");

interface FormProps {}

const Form: FC = ({}) => {
  const checkout = useCheckout();

  if (checkout.loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }
  return <div className="w-full h-screen flex flex-col"></div>;
};

export default Form;
