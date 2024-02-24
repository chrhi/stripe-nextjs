"use server";

import { stripe } from "@/lib/stripe";
import { PaymentIntent } from "@stripe/stripe-js";

export const createPaymentIntent = async (): Promise<
  PaymentIntent | undefined
> => {
  try {
    const intent = (await stripe.paymentIntents.create({
      metadata: {
        test: "",
      },
      amount: 900 * 100,
      currency: "usd",
      description: "payment intent",
      statement_descriptor: "",
    })) as unknown as PaymentIntent;

    return intent;
  } catch (err) {
    console.error(err);
  }
};
