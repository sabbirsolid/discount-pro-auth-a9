import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./Footer";


const AuthLayout = () => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main >
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
