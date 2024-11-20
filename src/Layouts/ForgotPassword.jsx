
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const ForgotPassword = () => {
  const { forgotPassword, logOut, inputEmail } = useContext(AuthContext);
  const navigate = useNavigate()
  const [emailOnChange, setEmailOnChange] = useState(inputEmail)

  const handlePasswordReset = (event) => {
    event.preventDefault();
    // const email = event.target.email.value;


    forgotPassword(emailOnChange)
      .then(() => {
        logOut();
        toast.success("Password reset email sent. Please check your inbox.");
        window.open("https://mail.google.com", "_blank");
        navigate("/auth/login");
      })
      .catch((error) => {
        toast.error(error.message || "Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center py-10 bg-gray-100">
       <Helmet>
                <title>Forgot Password | Discount Pro</title>
               
            </Helmet>
      <div className="card bg-white shadow-xl w-full sm:w-96 p-6 rounded-lg border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Reset Password</h1>
        <form onSubmit={handlePasswordReset} className="mt-6">
          <div className="form-control mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
            <input
              name="email"
              type="email"
              id="email"
              
              placeholder="Enter your email"
              className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              value={emailOnChange}
              onChange={(e) => setEmailOnChange(e.target.value)} 
               
            />
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn w-full py-2 rounded-md text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
            >
              Send Reset Email
            </button>
          </div>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Remembered your password?{" "}
          <Link to="/auth/login" className="text-indigo-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
