import Stripe from "stripe";

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY ?? process.env.STRIPE_SECRET_KEY ?? "",
  {
    apiVersion: "2023-10-16",

    appInfo: {
      name: "jadara the best way to create your academy",
      version: "0.1.0",
    },
  }
);
