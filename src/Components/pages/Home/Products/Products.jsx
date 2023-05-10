import Product from "./Product";
import { useQuery } from "@tanstack/react-query";
import BookingModal from "../BookingModal/BookingModal";
import { useState } from "react";
import Loader from "../../Loader/Loader";
import { Link, useParams } from "react-router-dom";

const Products = ({ setMproudcts, mProducts }) => {
  const params = useParams();

  const { data: products = [], refetch } = useQuery({
    queryKey: ["bookings", params],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_ROOT}/products/${params.brand}`
      );
      const data = await res.json();
      return data;
    },
  });

  console.log(products);

  return (
    <div>
      <div className="grid gap-6 mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {products?.map((product) => (
          <Product
            key={product._id}
            product={product}
            setMproudcts={setMproudcts}
          ></Product>
        ))}
      </div>
      <div>
        <BookingModal mProducts={mProducts} product={products}></BookingModal>
      </div>
    </div>
  );
};

export default Products;
