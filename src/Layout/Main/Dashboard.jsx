import React, { useContext } from "react";
import { FaCalendarAlt, FaHome, FaUserAlt, FaUserMd, FaUserPlus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Header from "../../Components/Pages/Header/Header";
import { AuthContext } from "../../Context/UserContext";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
  return (
    <div>
      <Header />
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
            <img src={user?.photoURL} className="w-20 h-20 rounded-full mx-auto border border-primary drop-shadow-md shadow-md" alt="" />
            <h3 className="text-center text-lg font-bold my-3">{user?.displayName}</h3>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard">
                <FaHome className="w-6 h-6 text-gray-500"></FaHome>
                <span class="ml-3">My Dashboard</span>
              </Link>
            </li>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard/appointment">
                <FaCalendarAlt className="w-6 h-6 text-gray-500"></FaCalendarAlt>
                <span class="ml-3">My Appoint</span>
              </Link>
            </li>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard/users">
                <FaUserAlt className="w-6 h-6 text-gray-500"></FaUserAlt>
                <span class="ml-3">All Users</span>
              </Link>
            </li>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard/adddoctors">
                <FaUserMd className="w-6 h-6 text-gray-500"></FaUserMd>
                <span class="ml-3">Add Doctor</span>
              </Link>
            </li>
            <li className="hover:bg-primary rounded-md hover:text-gray-200">
              <Link to="/dashboard/managedoctors">
                <FaUserPlus className="w-6 h-6 text-gray-500"></FaUserPlus>
                <span class="ml-3">Manage doctors</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
