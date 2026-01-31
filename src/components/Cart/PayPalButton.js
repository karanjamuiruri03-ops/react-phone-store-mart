import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton({ total, clearCart, history }) {
  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID,
        currency: "USD",
      }}
    >
      <PayPalButtons
        style={{ layout: "horizontal" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total.toString(),
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            console.log("Payment succeeded!", details);
            clearCart();
            if (history) {
              history("/");
            }
          });
        }}
        onCancel={() => {
          console.log("Payment cancelled");
        }}
        onError={(err) => {
          console.log("PayPal error:", err);
        }}
      />
    </PayPalScriptProvider>
  );
}