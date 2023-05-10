import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/pages/Home/Home/Home";
import Login from "../Components/pages/Login/Login";
import NotFound from "../Components/pages/NotFound/NotFound";
import Register from "../Components/pages/Register/Register";
import DashboardLayout from "../Layout/Main/DashboardLayout";
import Main from "../Layout/Main/Main";
import DashboardHome from "../Components/Dashboard/DashboardHome/DashboardHome";
import AddProducts from "../Components/Dashboard/AddProducts/AddProducts";
import MyProducts from '../Components/Dashboard/MyProducts/MyProducts'
import MyBookings from "../Components/Dashboard/MyBookings/MyBookings";
import Blog from "../Components/pages/Blog/Blog";
import Users from "../Components/Dashboard/Users/Users";
import Category from "../Components/pages/Category/Category";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Payment from "../Components/Dashboard/Payment/Payment";
import Products from "../Components/pages/Home/Products/Products";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/home/:brand",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>

      },
      {
        path: "/blog",
        element: <Blog></Blog>,

      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHome></DashboardHome>
      },
      {
        path: '/dashboard/addproducts',
        element: <AddProducts></AddProducts>
      },
      {
        path: '/dashboard/myproducts',
        element: <MyProducts></MyProducts>
      },
      {
        path: '/dashboard/bookings',
        element: <MyBookings></MyBookings>
      },
      {
        path: '/dashboard/bookings/:id',
        element: <Payment></Payment>,
        loader: ({ params }) => fetch(`${process.env.REACT_APP_ROOT}/bookings/${params.id}`)
      },
      {
        path: '/dashboard/users/:role',
        element: <Users></Users>
      },
    ]
  }
]);

export default router;
