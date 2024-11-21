import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { setUser, logIn, signInWithGoogle, setInputEmail,loading } = useContext(AuthContext);

  if(loading){
    return <div className="min-h-screen mx-auto"><span className="loading loading-spinner text-info"></span></div>;
  }

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [emailOnChange, setEmailOnChange] = useState('');
  setInputEmail(emailOnChange);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // setInputEmail(email);
    logIn(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully Logged In");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Login Error: ${error.message}`);
      });
      event.target.email.value = "";
      event.target.password.value = "";
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully Logged In");
        navigate("/");
      })
      .catch((error) => {
        toast.success(`Error: ${error.message}`);
      });
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-100 px-4">
       <Helmet>
                <title>Login | Discount Pro</title>
               
            </Helmet>
      <div className="w-full max-w-md p-8 border border-gray-200 shadow-lg rounded-lg bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login Now
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="form-control">
            <label className="label text-gray-700 font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
              value={emailOnChange} 
              onChange={(e) => setEmailOnChange(e.target.value)} 
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="form-control relative">
            <label className="label text-gray-700 font-medium">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-14 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash />  : <FaEye />}
            </button>
            <label className="label mt-1">
              <Link
                to="/forgot-password"
                className="label-text-alt text-sm text-indigo-600 font-medium hover:underline"
              >
                Forgot password?
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-200"
            >
              Login
            </button>
          </div>
        </form>

        {/* Register Link */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-indigo-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>

        {/* Google Sign-In Button */}
        <button
          onClick={handleSignInWithGoogle}
          className="w-full mt-6 py-2 rounded-md text-white font-medium bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md transition-all duration-200"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
