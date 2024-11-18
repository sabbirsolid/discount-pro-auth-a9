import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="w-10/12 mx-auto flex justify-center mt-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
