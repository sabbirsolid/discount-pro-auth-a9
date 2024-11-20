
// import { useContext, useState } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";
// import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

// const Register = () => {
//   const { createUser, updateUserProfile } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [error, setError] = useState(""); // To display password errors
//   const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const email = event.target.email.value;
//     const password = event.target.password.value;
//     const photo = event.target.PhotoURL.value;
//     const name = event.target.name.value;

//     // Combined validation for uppercase and lowercase
//     if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {
//       setError("Password must contain at least one uppercase and one lowercase letter.");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }

//     setError(""); // Clear error if the password is valid

//     // Create user and update profile info
//     createUser(email, password)
//       .then(() => {
//         updateUserProfile({ displayName: name, photoURL: photo })
//           .then(() => {
//             navigate("/");
//           })
//           .catch((error) => {
//             console.log(error.message);
//           });
//       })
//       .catch((error) => {
//         console.log(error.message);
//         setError("Failed to register. Please try again."); // Display general error message
//       });
//   };

//   return (
//     <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
//       <h1 className="text-3xl font-semibold text-center">Register Now</h1>
//       <form onSubmit={handleSubmit} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input
//             name="name"
//             type="text"
//             placeholder="name"
//             className="input input-bordered"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">PhotoURL</span>
//           </label>
//           <input
//             name="PhotoURL"
//             type="text"
//             placeholder="PhotoURL"
//             className="input input-bordered"
//             required
//           />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input
//             name="email"
//             type="email"
//             placeholder="email"
//             className="input input-bordered"
//             required
//           />
//         </div>
//         <div className="form-control relative">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input
//             name="password"
//             type={showPassword ? "text" : "password"}
//             placeholder="password"
//             className="input input-bordered"
//             required
//           />
//           <button
//             type="button"
//             className="absolute right-3 top-12 text-gray-500"
//             onClick={() => setShowPassword(!showPassword)}
//           >
//             {showPassword ? <FaEyeSlash /> : <FaEye />}
//           </button>
//           {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">
//               Forgot password?
//             </a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="w-full py-2 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-200">Register</button>
//         </div>
//       </form>
//       <p className="text-center">
//         Already have an Account?{" "}
//         <Link to="/auth/login" className="text-indigo-600 font-semibold hover:underline">
//           Login
//         </Link>
//       </p>
//     </div>
//   );
// };

// export default Register;
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(""); // To display password errors
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

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

    setError(""); // Clear error if the password is valid

    // Create user and update profile info
    createUser(email, password)
      .then(() => {
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        setError("Failed to register. Please try again."); // Display general error message
      });
  };

  return (
    <div className="flex justify-center items-center py-10 bg-gray-100 px-4">
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
              {showPassword ? <FaEye /> : <FaEyeSlash />}
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
      </div>
    </div>
  );
};

export default Register;
