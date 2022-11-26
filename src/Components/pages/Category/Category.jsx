import React from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../Home/Products/Products";

const Category = () => {
  const products = useLoaderData();
  console.log(products);

  return <div>
    {
        products?.map(product => <Products product={product}></Products>)
    }
  </div>;
};

export default Category;
