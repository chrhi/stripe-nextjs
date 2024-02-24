import React from "react";
import { PaymentIntent } from "@stripe/stripe-js";
import { createPaymentIntent } from "@/actions/create-payment-intent";

export const useCheckout = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [paymentIntent, setPaymentIntent] =
    React.useState<PaymentIntent | null>(null);

  async function fetch() {
    try {
      const intent = await createPaymentIntent();
      if (!intent) return;
      setPaymentIntent(intent);
      setLoading(false);
    } catch (err) {
      throw new Error("something went wrong");
    }
  }

  React.useEffect(() => {
    fetch();
  }, []);

  return { loading, paymentIntent };
};
