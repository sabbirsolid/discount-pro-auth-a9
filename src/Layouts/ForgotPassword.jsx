import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const ForgotPassword = () => {
    const {forgotPassword,logOut}  = useContext(AuthContext);

  const handlePasswordReset = (event) => {
    event.preventDefault();
    const email = event.target.email.value
    console.log(email);
    if (email === null) {
      toast.error("Please enter your email address.");
      return;
    }
    forgotPassword(email)
      .then(() => {
        toast.success("Password reset email sent. Please check your inbox."); 
      })
      .catch((error) => {
        toast.error(
          error.message || "Something went wrong. Please try again."
        );
      })
  };

  return (
   <div>
    <div className="card bg-base-100 mt-10 w-3/12 mx-auto shrink-0 shadow-2xl py-5">
        
        <h1 className="text-3xl font-semibold text-center">Reset Password</h1>
        <form onSubmit={handlePasswordReset} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control mt-6">
            <button href="https://mail.google.com" onClick={logOut}
              type="submit"
              className="btn btn-primary">
                Send Reset Email
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Remembered your password?{" "}
          <Link to="/auth/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
   </div>
  );
};

export default ForgotPassword;