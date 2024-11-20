import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
            : "hover:text-indigo-600 transition-colors duration-200"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/brands"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
            : "hover:text-indigo-600 transition-colors duration-200"
        }
      >
        Brands
      </NavLink>
      <NavLink
        to="/top-coupons"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
            : "hover:text-indigo-600 transition-colors duration-200"
        }
      >
        Top Coupons
      </NavLink>
      <NavLink
        to="/exclusive-deals"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
            : "hover:text-indigo-600 transition-colors duration-200"
        }
      >
        Exclusive
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
            : "hover:text-indigo-600 transition-colors duration-200"
        }
      >
        About Dev
      </NavLink>
      {user && (
        <NavLink
          to="/private/my-profile"
          className={({ isActive }) =>
            isActive
              ? "text-indigo-600 font-semibold border-b-2 border-indigo-600"
              : "hover:text-indigo-600 transition-colors duration-200"
          }
        >
          My Profile
        </NavLink>
      )}
    </>
  );

  return (
    <div className="navbar bg-white shadow-lg lg:px-6">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Dropdown for Mobile */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" to-indigo-600 hover:from-blue-600 hover:to-indigo-700 lg:hidden"
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
        <Link  to="/" className="text-2xl hidden lg:block font-bold text-indigo-600">
          Discount Pro
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6 text-gray-700">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        {user ? (
          <>
            <div className="flex items-center space-x-2">
              <p className="text-gray-700 hidden lg:block font-medium">{user?.email}</p>
              {user?.photoURL && (
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
              className="px-4 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/auth/login"
            className="px-4 py-2 text-white font-medium rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-md transition-all"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;


