import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const UpdateProfile = () => {
  const { updateProfileInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const photoURL = event.target.photoURL.value;
    // Update profile using Firebase's updateProfile method
    updateProfileInfo({ displayName: name, photoURL: photoURL })
      .then(() => {
        navigate("/private/my-profile"); // Redirect to the profile page after successful update
      })
      .catch((error) => {
        setError("Failed to update profile: " + error.message);
      });
  };

  return (
    <div className="">
      {/* <Navbar></Navbar> */}
      <div className=" w-4/12 mx-auto mt-10">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="text-2xl font-bold">Update Your Profile Information</h1>

        {/* Form to update Name and Photo URL */}
        <form onSubmit={handleUpdate} className="mt-6">
          <div className="form-control mb-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Display error message if any */}
          {/* {error && <p className="text-red-500">{error}</p>} */}

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Update Information
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
