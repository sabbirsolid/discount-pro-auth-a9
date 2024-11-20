import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Layouts/Footer";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    // Show a loading indicator while authentication is being determined
    return <div className="min-h-screen"><span className="loading loading-spinner text-info"></span></div>;
  }
  if (user && user?.email) {
    return (
      <div>
        <Navbar></Navbar>,{children},<Footer></Footer>
      </div>
    );
  } else {
    return <Navigate to="/auth/login"></Navigate>;
  }
};

export default PrivateRoutes;
