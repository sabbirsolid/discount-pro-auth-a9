import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleSubmit = (event) =>{
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
        .then(result => {
            console.log(result.user);
            // setUser(result.user);
        })
        .catch(error => {
            console.log(error.message);
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h1 className="text-3xl font-semibold text-center">Register Now</h1>
      <form  onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name="email" type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password" type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center">Already have an Account? <Link to='/auth/login' className="font-semibold text-blue-600">Login</Link> </p>
    </div>
    );
};

export default Register;