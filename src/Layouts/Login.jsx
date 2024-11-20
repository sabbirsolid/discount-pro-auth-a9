// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// const Login = () => {
//     const {setUser,logIn,signInWithGoogle,setInputEmail} = useContext(AuthContext)
//     const navigate = useNavigate()
//     const handleSubmit = (event) => {
//         event.preventDefault()
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         // login
//         setInputEmail(email)
//         logIn(email, password)
//         .then(result => {
//             // console.log(result.user)
//             setUser(result.user)
//             toast.success('Successfully Logged In')
//             navigate('/')
//         })
//         .catch(error => {
//           // console.log(error)
//           toast.error('Login Error:', error)
//         })
//     }
//     const handleSignInWithGoogle =()=>{
//         signInWithGoogle()
//         .then(result => {
//           // console.log(result.user)
//           navigate("/");

//         })
//         .catch(error => {
//           // console.log(error.message)
//         })
//     }
//     return (
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
//             <h1 className="text-3xl font-semibold text-center">Login Now</h1>
//       <form onSubmit={handleSubmit} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input name="email" type="email" placeholder="email" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input name="password" type="password" placeholder="password" className="input input-bordered" required />
//           <label className="label">
//             <Link to="/forgot-password"  clssName="label-text-alt link link-hover">Forgot password?</Link>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Login</button>
//         </div>
//       </form>
//       <p className="text-center">Don't have an Account? <Link to='/auth/register' className="font-semibold text-blue-600">Register</Link> </p>
//       <button onClick={handleSignInWithGoogle} className="btn btn-sm w-6/12 mx-auto mt-3">Sign in with Google</button>
//     </div>
//     );
// };

// export default Login;
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { setUser, logIn, signInWithGoogle, setInputEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // For toggling password visibility

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    setInputEmail(email);
    logIn(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Successfully Logged In");
        navigate("/");
      })
      .catch((error) => {
        toast.error(`Login Error: ${error.message}`);
      });
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
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
              {showPassword ? <FaEye /> : <FaEyeSlash />}
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
