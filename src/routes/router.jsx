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
import ForgotPassword from "../Layouts/ForgotPassword";
import UpdateProfile from "../Layouts/UpdateProfile";

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
    path: '/private/brand-details/:id',
    element: <PrivateRoutes>
      <BrandDetails></BrandDetails>
    </PrivateRoutes>,
    loader: async ({ params }) => {
      const response = await fetch('../../public/brandsInfo.json');
      const brands = await response.json();
      return brands.find((brand) => brand._id === params.id);
    }
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
    path: "/forgot-password",
    element: <ForgotPassword></ForgotPassword>
  },
  {
    path: "/update-profile",
    element: <UpdateProfile></UpdateProfile>
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
