import React, { useEffect, useState } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { CardElement,  useElements, useStripe } from "@stripe/react-stripe-js";
import { async } from '@firebase/util';


const CheckoutForm = ({booking}) => {
    const stripe = useStripe();
     const [clientSecret, setClientSecret] = useState("");
    const elements = useElements();
    const {price} = booking

    const handleSubmit = async (event) => {
      event.preventDefault();

      if (!stripe || !elements) {
        return;
      }

      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }

      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        console.log("[error]", error);
      } else {
        console.log("[PaymentMethod]", paymentMethod);
      }
    };

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className='btn btn-sm mt-3' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
    );
};

export default CheckoutForm;