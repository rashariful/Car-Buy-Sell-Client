import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from './CheckoutForm ';
import {  Elements, } from "@stripe/react-stripe-js";

// const stripePromise = loadStripe(
//   "pk_test_51M8WntKhkwZTuCQF41ydTggYOKlwx7G3Z0rs5l16I1CBaTKsEQMzdcysh4PSDx6dO1HmfCXjQDjRbf3W8SwLmdVy00B7GzP1Uz"
// );
// console.log(stripePromise);
const Payment = () => {
    const booking = useLoaderData()
    console.log(booking);

    return (
      <div>
        <h1>pay for this items {booking.title}</h1>
        <h1>pay for this items {booking.price}</h1>
        <div>
          {/* <Elements stripe={stripePromise}>
            <CheckoutForm />
        <CheckoutForm booking={booking}></CheckoutForm>
          </Elements> */}
        </div>
      </div>
    );
};

export default Payment;