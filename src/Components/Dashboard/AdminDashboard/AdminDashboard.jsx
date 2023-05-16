import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { FiShoppingCart } from "react-icons/fi";
import { FcShop, FcBusinessman, FcBusinesswoman } from "react-icons/fc";

const AdminDashboard = () => {
    const [users, setUsers] = useState([])
    const [bookings, setBookings] = useState([])
    const [products, setProducts] = useState([])
    const [sellers, setSellers] = useState([])

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_ROOT}/users`)
    .then(res => setUsers(res.data))
  },[])
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_ROOT}/products`)
    .then(res => setProducts(res.data))
  },[])

  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_ROOT}/bookings`)
    .then(res => setBookings(res.data))
  },[])
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_ROOT}/seller`)
    .then(res => setSellers(res.data))
  },[])
     
console.log(sellers)


  return (
    <div className="w-[80%] mx-auto min-h-screen mt-10">
      <h2 className="text-2xl font-bold capitalize text-center text-slate-600 mb-10">
        Admin dashboard updating...
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <div className="border py-5 px-10 flex flex-col items-center bg-white rounded-lg shadow-md hover:skal-75 ">
          <div className="flex items-center justify-center border border-slate-500 rounded-full w-14 h-14">
            <FcShop className="w-8 h-8 text-slate-500"></FcShop>
          </div>
          <h3 className="text- font-semibold mb-5 mt-2">Products</h3>
          <p className="text-2xl font-bold mt-5 mb-2">{products?.length}</p>
          <p className="text-gray-500">Total products</p>
        </div>
        <div className="border py-5 px-10 flex flex-col items-center bg-white rounded-lg shadow-md hover:skal-75 ">
          <div className="flex items-center justify-center border border-slate-500 rounded-full w-14 h-14">
            <FcBusinessman className="w-8 h-8 text-slate-500"></FcBusinessman>
          </div>
          <h3 className="text- font-semibold mb-5 mt-2">Seller</h3>
          <p className="text-2xl font-bold mt-5 mb-2">{sellers?.length}</p>
          <p className="text-gray-500">Total seller</p>
        </div>
        <div className="border py-5 px-10 flex flex-col items-center bg-white rounded-lg shadow-md hover:skal-75 ">
          <div className="flex items-center justify-center border border-slate-500 rounded-full w-14 h-14">
            <FcBusinesswoman className="w-8 h-8 text-slate-500"></FcBusinesswoman>
          </div>
          <h3 className="text- font-semibold mb-5 mt-2">Buyer</h3>
          <p className="text-2xl font-bold mt-5 mb-2">{users?.length}</p>
          <p className="text-gray-500">Total buyer</p>
        </div>
        <div className="border py-5 px-10 flex flex-col items-center bg-white rounded-lg shadow-md hover:skal-75 ">
          <div className="flex items-center justify-center border border-slate-500 rounded-full w-14 h-14">
            <FiShoppingCart className="w-8 h-8 text-slate-500"></FiShoppingCart>
          </div>
          <h3 className="text- font-semibold mb-5 mt-2">Bookings</h3>
          <p className="text-2xl font-bold mt-5 mb-2">{bookings?.length}</p>
          <p className="text-gray-500">Total booking</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
