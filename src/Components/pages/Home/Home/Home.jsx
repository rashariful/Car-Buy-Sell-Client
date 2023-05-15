import React, { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import BookingModal from "../BookingModal/BookingModal";
import Future from "../Future/Future";
import Product from "../Products/Product";
import Advertise from "../Advertise/Advertise";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Products from "../Products/Products";
import HotCategory from "../HotCategory/HotCategory";
import Collection from "../Collection/Collection";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
  const [mProducts, setMproudcts] = useState([]);
  const [boost, setBoost] = useState([]);
  const params = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_ROOT}/product/boost`)
      .then((res) => res.json())
      .then((data) => setBoost(data));
  }, []);

  //   const { data: products = [], refetch } = useQuery({
  //     queryKey: ["bookings", params ],
  //     queryFn: async () => {
  //       const res = await fetch(
  //         `https://server-nine-beta.vercel.app/products/${params.brand}`
  //       );
  //       const data = await res.json();
  //       return data;
  //     },
  //   });

  // console.log(products);

  // const products = useLoaderData();

  return (
    <div className="max-w-screen-xl mx-auto">
      <section>
        <Banner></Banner>
      </section>
      
      <section>
        <HotCategory/>
      </section>

      <section>
        <div className="flex flex-col text-center w-full mt-36">
          <h2 className="sm:text-3xl text-2xl capitalize font-medium title-font text-gray-900">
            Let's find your dream car
          </h2>
          <p className=" text-gray-500 mt-3">
            We recommend the very best and newest cars today, and also a
            friendly price for you.
          </p>
        </div>

        <div className="flex justify-center gap-5 mt-10">
          <Link to="/home/toyota">
            <div className=" flex items-center w-36 h-24 gap-3 border border-gray-300 py-3 px-4 rounded-md shadow-sm">
              <p className="font-semibold text-xl"> Toyota</p>{" "}
              <img
                className="w-12 h-auto"
                src="https://global.toyota/pages/global_toyota/mobility/toyota-brand/emblem_ogp_001.png"
                alt=""
              />
            </div>
          </Link>
          <Link to="/home/honda">
            <div className=" flex items-center w-36 h-24 gap-3 border border-gray-300 py-3 px-4 rounded-md shadow-sm">
              <p className="font-semibold text-xl"> Honda</p>{" "}
              <img
                className="w-10 h-auto"
                src="https://live.staticflickr.com/3453/3747525628_5f0fab0ba0_b.jpg"
                alt=""
              />
            </div>
          </Link>
          <Link to="/home/tesla">
            <div className=" flex items-center w-36 h-24 gap-3 border border-gray-300 py-3 px-4 rounded-md shadow-sm">
              <p className="font-semibold text-xl"> Tesla</p>{" "}
              <img
                className="w-16 h-auto"
                src="https://1000logos.net/wp-content/uploads/2018/02/Color-Tesla-logo.jpg"
                alt=""
              />
            </div>
          </Link>
        </div>

        <Products mProducts={mProducts} setMproudcts={setMproudcts}></Products>
      </section>

      <section>
        <div className="flex flex-col text-center w-full mb-20 mt-36">
          <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
            All the advertisement product post here
          </h2>
          <p className=" text-gray-500 mt-3">
            You can add your products on this section.
          </p>
        </div>

        <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {boost.map((product) => (
            <Advertise
              product={product}
              key={product._id}
              setMproudcts={setMproudcts}
            ></Advertise>
          ))}
        </div>
      </section>
      <section><Collection/></section>
      <section>
        <Future></Future>
      </section>
      <section> <NewsLetter/> </section>
    </div>
  );
};

export default Home;
