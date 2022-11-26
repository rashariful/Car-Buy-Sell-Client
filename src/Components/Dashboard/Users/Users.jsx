import { useQuery } from "@tanstack/react-query";
import React from "react";

const Users = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

const handleSellerVerify = (id) => {
  fetch(`http://localhost:5000/users/verify/${id}`, {
    method: "PUT",
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount > 0) {
        alert("seller verify successfully");
        refetch();
      }
    });
};

  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          console.log(data);
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="w-[80%] mx-auto">
        <h1 className="text-2xl font-bold my-10">All Users here</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>User Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user?.role !== "verifySeller" && (
                      <button
                        onClick={() => handleSellerVerify(user._id)}
                        className="btn btn-sm btn-primary "
                      >
                        verify seller
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
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

export default Users;
