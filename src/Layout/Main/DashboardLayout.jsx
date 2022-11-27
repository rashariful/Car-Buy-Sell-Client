import React, { useContext } from "react";
import { FaBoxOpen, FaCalendarAlt, FaCartPlus, FaHome, FaUserAlt, FaUserMd, FaUserPlus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Components/pages/Header/Header";

import { AuthContext } from "../../Context/UserContext";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 bg-white rounded-t-md text-base-content">
            <img
              src={user?.photoURL}
              className="w-20 h-20 rounded-full mx-auto border border-primary drop-shadow-md shadow-md"
              alt=""
            />
            <h3 className="text-center text-lg font-bold my-3">
              {user?.displayName}
            </h3>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard">
                <FaHome className="w-6 h-6 text-gray-500"></FaHome>
                <span class="ml-3">My Dashboard</span>
              </Link>
            </li>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard/bookings">
                <FaCalendarAlt className="w-6 h-6 text-gray-500"></FaCalendarAlt>
                <span class="ml-3">My Orders</span>
              </Link>
            </li>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard/users">
                <FaUserAlt className="w-6 h-6 text-gray-500"></FaUserAlt>
                <span class="ml-3">All Users</span>
              </Link>
            </li>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard/addproducts">
                <FaCartPlus className="w-6 h-6 text-gray-500"></FaCartPlus>
                <span class="ml-3">Add Product</span>
              </Link>
            </li>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard/myproducts">
                <FaBoxOpen className="w-6 h-6 text-gray-500"></FaBoxOpen>
                <span class="ml-3">My Products</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
