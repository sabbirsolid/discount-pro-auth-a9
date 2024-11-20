import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import bg from "../assets/dark.svg"
import { Link } from "react-router-dom";
const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {/* Cover Section */}
      <div
        className="relative bg-cover bg-center h-64"
        style={{
          backgroundImage:  `url(${bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">
           <span className="text-orange-500"> {user.displayName}, </span> Welcome to Your Profile!
          </h1>
        </div>
      </div>

      {/* User Card */}
      <div className="flex justify-center mt-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-96 border border-gray-200">
          <div className="p-6 flex flex-col items-center">
            {/* User Photo */}
            <img
              src={user.photoURL}
              alt="User Photo"
              className="w-24 h-24 rounded-full border-4 border-blue-500"
            />

            {/* User Info */}
            <div className="mt-4 text-center space-y-2">
              <h2 className="text-2xl font-semibold text-gray-800">
                {user.displayName}
              </h2>
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-700">Email: </span>
                {user.email}
              </p>
            </div>

            {/* Update Information Button */}
            <Link to="/update-profile" className="mt-6 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Update Information
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
