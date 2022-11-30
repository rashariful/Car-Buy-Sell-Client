import React from "react";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm ";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51M8WntKhkwZTuCQF41ydTggYOKlwx7G3Z0rs5l16I1CBaTKsEQMzdcysh4PSDx6dO1HmfCXjQDjRbf3W8SwLmdVy00B7GzP1Uz"
);
const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { title, price, name, email, phone, description } = booking;
  return (
    <section className="text-gray-600 body-font relative">
      <div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
            <div class="mb-10 md:mb-16">
              <h2 class="text-blue-600 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                Checkout form
              </h2>
            </div>

            <div class="w-[50%] mx-auto">
              <div class="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden">
                <div className="shadow-2xl w-full">
                  <div className="w-96 mx-auto my-5">
                    <h2 className="text-gray-500 text-xl mb-2 text-left mb-10">
                      Payment information
                    </h2>
                    <h2 className="text-gray-700 text-xl mb-2 text-right mb-3">
                     {title}
                    </h2>
                    <h2 className="text-secondary font-bold   mb-2 text-right mb-3">
                     Price: {price}
                    </h2>
                    <label
                      type="text"
                      for="email"
                      className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Name
                    </label>
                    <input
                      name="email"
                      defaultValue={name}
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>
                  <div className="w-96 mx-auto my-5">
                    <label
                      type="text"
                      for="email"
                      className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Email
                    </label>
                    <input
                      name="email"
                      defaultValue={email}
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>
                  <div className="w-96 mx-auto my-5">
                    <label
                      type="text"
                      for="email"
                      className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Address
                    </label>
                    <input
                      name="email"
                      defaultValue={description}
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>
                  <div className="w-96 mx-auto my-5">
                    <label
                      type="text"
                      for="email"
                      className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                    >
                      Phone number
                    </label>
                    <input
                      name="email"
                      defaultValue={phone}
                      className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                    />
                  </div>

                  <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                  </Elements>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payment;
