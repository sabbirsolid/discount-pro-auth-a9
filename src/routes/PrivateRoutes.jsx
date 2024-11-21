import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../Layouts/Footer";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <span className="loading loading-spinner text-info text-5xl"></span>
      </div>
    );
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