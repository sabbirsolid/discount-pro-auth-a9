import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, updateProfileInfo, signInWithGoogle,loading} = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.PhotoURL.value;
    const name = event.target.name.value;
  
    // Combined validation for uppercase and lowercase
    if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
      setError("Password must contain at least one uppercase and one lowercase letter.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (loading) {
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50">
          <span className="loading loading-spinner text-info text-5xl"></span>
        </div>
      );
    }
  
    setError(""); // Clear error if the password is valid
  
    // Create user and update profile info
    createUser(email, password)
      .then(() => {
        updateProfileInfo({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            setError(`Failed to update profile: ${error.message}`); // Handle profile update errors
          });
      })
      .catch((error) => {
        setError(`Failed to register: ${error.message}`); // Display registration errors
      });
  
    event.target.email.value = "";
    event.target.password.value = "";
    event.target.PhotoURL.value = "";
    event.target.name.value = "";
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success('Successfully Login')
        navigate("/");
      })
      .catch((error) => {
        toast.success(`Error: ${error.message}`);
      });
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-100 px-4">
       <Helmet>
                <title>Register | Discount Pro</title>
               
            </Helmet>
      <div className="w-full max-w-md p-8 border border-gray-200 shadow-lg rounded-lg bg-white">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Register Now</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="form-control">
            <label className="label text-gray-700 font-medium">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label text-gray-700 font-medium">Photo URL</label>
            <input
              name="PhotoURL"
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label text-gray-700 font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control relative">
            <label className="label text-gray-700 font-medium">Password</label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-14 text-gray-500 hover:text-gray-700"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ?  <FaEyeSlash />:<FaEye /> }
            </button>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-200"
            >
              Register
            </button>
          </div>
        </form>

        {/* Already have an account? */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-indigo-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
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

export default Register;