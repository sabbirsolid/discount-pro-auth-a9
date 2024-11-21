import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaHome } from "react-icons/fa";
import { MdAccountBox, MdBrandingWatermark } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-semibold flex items-center gap-1 border-b-2 border-indigo-600"
            : "hover:text-indigo-600 flex items-center gap-1 transition-colors duration-200"
        }
      >
       <FaHome /> Home
      </NavLink>
      <NavLink
        to="/brands"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-semibold flex items-center gap-1 border-b-2 border-indigo-600"
            : "hover:text-indigo-600 flex items-center gap-1 transition-colors duration-200"
        }
      >
       <MdBrandingWatermark /> Brands
      </NavLink>
      
      {user && (
        <NavLink
          to="/private/my-profile"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold flex items-center gap-1 border-b-2 border-indigo-600"
              : "hover:text-indigo-600 flex items-center gap-1 transition-colors duration-200"
          }
        >
         <MdAccountBox />
         My Profile
        </NavLink>
      )}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-semibold flex items-center gap-1 border-b-2 border-indigo-600"
            : "hover:text-indigo-600 flex items-center gap-1 transition-colors duration-200"
        }
      >
       <IoMdInformationCircleOutline /> About Dev
      </NavLink>
      
    </>
  );

  return (
    <div className="navbar bg-white shadow-lg lg:px-6">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="to-indigo-600 hover:from-blue-600 hover:to-indigo-700 lg:hidden"
            aria-label="Menu"
          >
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
            className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg mt-3 w-52 space-y-2 p-2 z-10"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-2xl hidden lg:block font-bold text-indigo-600">
          Discount Pro
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-start lg:hidden">
      {user ? (
          <p className="text-gray-700 text-sm">
            Welcome, <span className="font-semibold text-indigo-600">{user.displayName}</span>!
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="navbar-center hidden lg:flex lg:flex-col justify-center">
        {user ? (
          <p className="text-gray-700 text-lg font-medium">
            Welcome, <span className="font-semibold text-indigo-600">{user.displayName}</span>!
          </p>
        ) : (
          ""
        )}
        <ul className="menu menu-horizontal space-x-6 text-gray-700">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-2">
        {user ? (
          <>
            <div className="flex items-center space-x-1">
              <p className="text-gray-700 hidden lg:block font-medium">{user?.email}</p>
            
              {user.photoURL && (
                <Link to="/private/my-profile">
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
                  />
                </Link>
              )}
            </div>
            <button
              onClick={logOut}
              className="px-2 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all"
            >
              Logout
            </button>
          </>
        ) : (
          <div className="space-x-3">
            <Link
              to="/auth/login"
              className="px-2 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all"
            >
              Login
            </Link>
            <Link
              to="/auth/register"
              className="px-2 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;