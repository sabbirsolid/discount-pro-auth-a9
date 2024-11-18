import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/brands">Brands</NavLink>
      <NavLink to="/private/my-profile">my-Profile</NavLink>
      <NavLink to="/about">About Dev</NavLink>

      {/* {
        loggedUser &&  <NavLink to="/order">Orders</NavLink>
      }
      {
        loggedUser &&  <NavLink to="/profile">Profile</NavLink>
      } */}
    </>
  );
  
const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  
  // console.log();
    return (
        <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content space-y-5  bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Discount Pro</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-5 px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {
            user? <>
            <p>{user?.email}</p>
            <button onClick={logOut} className="btn">Sign Out</button>
            </> : <Link className="btn" to="/auth/login"  >Login</Link>
        }
        {/* <p>{user?.email}</p>
        <Link className="btn" to='/auth/login'>Login</Link>
        <button className="btn" onClick={logOut} >Logout</button> */}
      </div>
    </div>
    );
};

export default Navbar;