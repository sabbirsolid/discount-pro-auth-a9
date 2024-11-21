import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import bg from "/dark.svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
  const { user,loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <span className="loading loading-spinner text-info text-5xl"></span>
      </div>
    );
  }

  return (
    <div>
       <Helmet>
                <title>My Profile | Discount Pro</title>
               
            </Helmet>
      {/* Cover Section */}
      <div
        className="relative bg-cover bg-center h-80"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
            Welcome, <span className="text-orange-500">{user.displayName}</span>!
          </h1>
        </div>
      </div>

      {/* User Card */}
      <div className="flex justify-center mt-10">
        <div className="bg-white shadow-md rounded-lg overflow-hidden w-96 border border-gray-200">
          <div className="p-6 flex flex-col items-center">
            {/* User Photo */}
            <img
              src={user.photoURL}
              alt="User"
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md"
            />

            {/* User Info */}
            <div className="mt-4 text-center space-y-2">
              <h2 className="text-2xl font-semibold text-gray-800">
                {user.displayName}
              </h2>
              <p className="text-sm text-gray-600">
                <span className="font-medium text-gray-700">Email: </span>
                {user.email}
              </p>
            </div>

            {/* Update Information Button */}
            <Link
              to="/update-profile"
              className="mt-6 px-5 py-2.5 text-white font-medium rounded-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg transition-all duration-200"
            >
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;