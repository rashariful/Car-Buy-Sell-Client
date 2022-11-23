import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/pages/Home/Home/Home";
import Login from "../Components/pages/Login/Login";
import NotFound from "../Components/pages/NotFound/NotFound";
import Register from "../Components/pages/Register/Register";
import Main from "../Layout/Main/Main";


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
]);

export default router;
