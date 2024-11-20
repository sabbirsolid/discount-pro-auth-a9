
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { updateProfileInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    updateProfileInfo({ displayName: name, photoURL: photoURL })
      .then(() => {
        navigate("/private/my-profile");
        toast.success("Successfully Updated Information")
      })
      .catch((error) => {
        console.error("Failed to update profile: ", error.message);
      });
  };

  return (
    <div className="flex items-center justify-center py-10 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Update Profile
        </h1>
        <p className="text-gray-500 text-center mt-2">
          Keep your profile up to date by editing your information below.
        </p>
        <form onSubmit={handleUpdate} className="mt-6">
          <div className="form-control mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label
              htmlFor="photoURL"
              className="block text-gray-700 font-medium"
            >
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              id="photoURL"
              placeholder="Enter your photo URL"
              className="input input-bordered w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="w-full py-3 rounded-md text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            >
              Update Information
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
