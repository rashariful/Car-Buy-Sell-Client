import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";
import swal from "sweetalert";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const { data: products = [], refetch } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://server-nine-beta.vercel.app/products?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://server-nine-beta.vercel.app/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
      });
  };

  const handleBoost = (id) => {
    console.log(id);
    fetch(`https://server-nine-beta.vercel.app/products/boost/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal({
            title: `boost Successful ${data.title}`,
            icon: "success",
            button: "ok",
          });
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
                <th>price</th>
                <th>condition</th>
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
                  <td>{product?.originalPrice}</td>
                  {product?.boostStatus !== "boost" ? (
                    <td>
                      <button
                        onClick={() => handleBoost(product._id)}
                        className="btn btn-sm btn-warning "
                      >
                        Boost
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button className="btn btn-sm btn-success ">
                        Boosted
                      </button>
                    </td>
                  )}
                  <td>
                    <button
                      onClick={() => handleDelete(product?._id)}
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
