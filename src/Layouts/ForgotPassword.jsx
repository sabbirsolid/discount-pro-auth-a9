import { useState } from "react";
import { auth } from "../firebase/config"; // Import your Firebase config
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import Navbar from "../components/Navbar";


const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent. Please check your inbox.");
        setEmail(""); 
      })
      .catch((error) => {
        toast.error(
          error.message || "Something went wrong. Please try again."
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <Navbar></Navbar>
      <h1 className="text-2xl font-semibold text-center">Reset Password</h1>
      <form onSubmit={handlePasswordReset} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control mt-6">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Reset Email"}
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
  );
};

export default ForgotPassword;