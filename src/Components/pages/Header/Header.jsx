import React, { useState } from "react";
import { useContext } from "react";
import { FaCarAlt } from "react-icons/fa";
import logo from "../../../../src/assets/img/logo.png"
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

const Header = () => {
  const { user, logoutUser } = useContext(AuthContext);
  const [navbar, setNavbar] = useState(false)

  const changeNavbar = ()=>{
 if (window.scrollY >= 80) {
  setNavbar(true)
 } else {
  setNavbar(false)
 }
  } 
  const menuItems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      <li></li>
    </React.Fragment>
  );
window.addEventListener("scroll", changeNavbar)
  return (
    <div className={` sticky top-0 z-50 flex justify-between drop-shadow-sm bg-white border border-b mx-auto`}>
      <div className='navbar-start'>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
            <li>
              {user?.email ? (
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <button onClick={logoutUser}>Logout</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <Link to="/login" className="bg-rose-500 text-white rounded-md font-semibold">Login</Link>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="">
           <img src={logo} className="w-36 h-auto z-50 ml-10"  alt="buy/sell/car logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
          <li>
            {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                  {user.photoURL ?
            <img
            src={user?.photoURL}
            className="w-20 h-20 rounded-full mx-auto border-2 border-slate-300 shadow-lg"
            alt=""
          /> :
          <img src="https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg" className="w-20 h-20 rounded-full mx-auto border-2 border-slate-300 shadow-lg" alt="" /> 
           }
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <button onClick={logoutUser}>Logout</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn border-none bg-rose-500 hover:bg-rose-600 mt-6 mr-10 text-white rounded-md font-semibold">Login</Link>
            )}
          </li>
        </ul>
      </div>
      <label
        htmlFor="dashboard-drawer"
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </label>
    </div>
  );
};

export default Header;
