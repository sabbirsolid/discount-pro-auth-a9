import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
    const {setUser,logIn,signInWithGoogle} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        // login
        logIn(email, password)
        .then(result => {
            // console.log(result.user)
            setUser(result.user)
            toast.success('Successfully Logged In')
            navigate('/')
        })
        .catch(error => {
          // console.log(error)
          toast.error('Login Error:', error)
        })
    }
    const handleSignInWithGoogle =()=>{
        signInWithGoogle()
        .then(result => {
          // console.log(result.user)
          navigate("/");

        })
        .catch(error => {
          // console.log(error.message)
        })
    }
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h1 className="text-3xl font-semibold text-center">Login Now</h1>
      <form onSubmit={handleSubmit} className="card-body">
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
            <Link to="/forgot-password"  clssName="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center">Don't have an Account? <Link to='/auth/register' className="font-semibold text-blue-600">Register</Link> </p>
      <button onClick={handleSignInWithGoogle} className="btn btn-sm w-6/12 mx-auto mt-3">Sign in with Google</button>
    </div>
    );
};

export default Login;