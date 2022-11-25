import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/UserContext";


const MyBookings = () => {
  const { user } = useContext(AuthContext);

  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/bookings/${id}`, {
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
      <h1 className="text-2xl font-bold my-10">My Appointment</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>title</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{booking?.title}</td>
                <td>{booking?.price}</td>

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
