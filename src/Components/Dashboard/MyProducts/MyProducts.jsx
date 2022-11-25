import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';


const MyProducts = () => {


    const {
      data: products = [],
      isLoading,
      refetch,
    } = useQuery({
      queryKey: ["products"],
      queryFn: async () => {
        const res = await fetch("http://localhost:5000/products");
        const data = await res.json();
        return data;
      },
    });
 console.log(products);
    const handleDelete = (id) => {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            refetch();
          }
        });
    };

    return (
      <div>
        <div className="w-[80%] mx-auto">
          <h1 className="text-2xl font-bold my-10">All Products</h1>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Photo</th>
                  <th>Product Name</th>
                  <th>brand Name</th>
                  <th>condition</th>
                  <th>price</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((product, i) => (
                  <tr>
                    <th>{i + 1}</th>
                    <td>
                      <img
                        src={product?.img}
                        className="w-12 h-12 rounded-full"
                        alt="doctor.name"
                      />
                    </td>
                    <td>{product?.title}</td>
                    <td>{product?.brand}</td>
                    <td>{product?.condition}</td>
                    <td>{product?.originalPrice}</td>
                    <td>
                      <button
                        onClick={() => handleDelete(product._id)}
                        className="btn btn-sm"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyProducts;