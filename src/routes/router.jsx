import { createBrowserRouter } from "react-router-dom";
import Home from "../Layouts/Home";
import Error from "../Layouts/Error";
import Brands from "../Layouts/Brands";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Layouts/Register";
import Login from "../Layouts/Login";
import PrivateRoutes from "./PrivateRoutes";
import BrandDetails from "../components/BrandDetails";
import MyProfile from "../components/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/brands",
    element: <Brands></Brands>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/private/brand-details",
    element: (
      <PrivateRoutes>
        <BrandDetails></BrandDetails>
      </PrivateRoutes>
    ),
    // children:[
    //   {
    //     path: "/private/brand-details",
    //     element: <BrandDetails></BrandDetails>
    //   },
    //   {
    //     path: "/private/my-profile",
    //     element: <MyProfile></MyProfile>
    //   }
    // ]
  },
  {
    path: "/private/my-profile",
    element: (
      <PrivateRoutes>
        <MyProfile></MyProfile>
      </PrivateRoutes>
    ),
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
