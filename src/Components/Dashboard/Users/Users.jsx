import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";
import Loader from "../../pages/Loader/Loader";

const Users = () => {
  const params = useParams();

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users", params],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.REACT_APP_ROOT}/user/${params.role}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleSellerVerify = (id) => {
    fetch(`${process.env.REACT_APP_ROOT}/users/verify/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          swal({
            title: `Verified Successful`,
            icon: "success",
            button: "ok",
          });
          refetch();
        }
      });
  };

  const handleDeleteUser = (id) => {
    fetch(`${process.env.REACT_APP_ROOT}/users/${id}`, {
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
                <th>actions</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => (
                <tr>
                  <th>{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  {user?.sellerStatus !== "verifySeller" ? (
                    <td>
                      <button
                        onClick={() => handleSellerVerify(user._id)}
                        className="btn btn-sm btn-warning "
                      >
                        unverified
                      </button>
                    </td>
                  ) : (
                    <td>
                      <button
                        onClick={() => handleSellerVerify(user._id)}
                        className="btn btn-sm btn-success "
                      >
                        verified
                      </button>
                    </td>
                  )}

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
