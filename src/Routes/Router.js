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
        path: "/home",
        element: <Home></Home>,
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
    element: <DashboardLayout></DashboardLayout>,
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
    ]
  }
]);

export default router;
