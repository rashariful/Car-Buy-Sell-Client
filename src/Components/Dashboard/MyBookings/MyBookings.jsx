import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const MyBookings = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://server-nine-beta.vercel.app/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDelete = (id) => {
    console.log(id);
    fetch(`https://server-nine-beta.vercel.app/bookings/${id}`, {
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
    <div className="w-[80%] mx-auto">
      <h1 className="text-2xl font-bold my-10">My Bookings</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>title</th>
              <th>price</th>
              <th>payment</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{booking?.title}</td>
                <td>{booking?.price}</td>
                <td>
                  {booking.price && !booking.paid && (
                    <Link to={`/dashboard/bookings/${booking._id}`}>
                      <button className="btn btn-primary btn-sm">Pay Now</button>
                    </Link>
                  )}
                  {booking.price && booking.paid && (
                    <button className="btn btn-success btn-sm">Paid</button>
                  )}
                </td>
               
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleDelete(booking._id)}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
