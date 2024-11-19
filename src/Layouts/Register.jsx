// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
// import { Link, useNavigate } from "react-router-dom";


// const Register = () => {
//     const {createUser,updateUserProfile} = useContext(AuthContext);
//     const navigate = useNavigate()
//     const handleSubmit = (event) =>{
//         event.preventDefault()
//         const email = event.target.email.value;
//         const password = event.target.password.value;
//         const photo = event.target.PhotoURL.value;
//         const name = event.target.name.value;
        
//         // creating and updating profile info
//         createUser(email, password)
//         .then(() => {
//             updateUserProfile({ displayName: name, photoURL: photo })
//             .then(() => {
//               navigate("/")
//             })
//             .catch(error => {
//               console.log(error.message);
//             })
//         })
//         .catch(error => {
//             console.log(error.message);
//         })
//     }
//     return (
//         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
//             <h1 className="text-3xl font-semibold text-center">Register Now</h1>
//       <form  onSubmit={handleSubmit} className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Name</span>
//           </label>
//           <input name="name" type="text" placeholder="name" className="input input-bordered" required />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">PhotoURL</span>
//           </label>
//           <input name="PhotoURL" type="text" placeholder="PhotoURL" className="input input-bordered" required />
//         </div>
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
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//           <button className="btn btn-primary">Register</button>
//         </div>
//       </form>
//       <p className="text-center">Already have an Account? <Link to='/auth/login' className="font-semibold text-blue-600">Login</Link> </p>
//     </div>
//     );
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
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
      <h1 className="text-3xl font-semibold text-center">Register Now</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input
            name="PhotoURL"
            type="text"
            placeholder="PhotoURL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button
            type="button"
            className="absolute right-3 top-12 text-gray-500"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">
        Already have an Account?{" "}
        <Link to="/auth/login" className="font-semibold text-blue-600">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
