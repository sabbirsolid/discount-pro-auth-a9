import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

const Brands = () => {
  const { data, setId } = useContext(AuthContext);
  //   console.log(data);
  return (
    <div className=" space-y-5">
      {/* <nav>
        <Navbar></Navbar>
      </nav> */}
      {/* Section Header */}
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
  <h1 className="font-bold text-3xl text-center text-gray-700 mb-6">
    Select Your Brands from the List
  </h1>
  <div className="join flex justify-center items-center">
    {/* Input Field */}
    <input
      className="input input-bordered join-item flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder="Type your brand name"
    />
    {/* Search Button */}
    <button
      className="join-item bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-r-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
    >
      Search
    </button>
  </div>
</div>

      {/* main cards */}
      <div className="flex flex-col w-11/12 sm:w-10/12 lg:w-8/12 mx-auto gap-6">
  {data.map((brand) => (
    <div className="bg-white w-11/12 mx-auto p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow lg:grid grid-cols-7 gap-4 border border-gray-300">
      {/* Top Section for Mobile */}
      <div className=" flex flex-col items-center sm:items-start">
        <div className="w-24 h-24">
        <figure className=" mx-auto flex flex-grow sm:w-full sm:h-auto">
          <img
            className="w-full h-full "
            src={brand.brand_logo}
            alt="Brand Logo"
          />
        </figure>
        </div>
        <div className=" text-center">
          <h3 className="text-gray-500 text-sm font-medium flex items-center justify-center">
            <span className="font-semibold text-gray-800 mr-1">Rating:</span>
            {brand.rating}
            <span className="text-yellow-500 ml-1 flex">
              <FaStar />
            </span>
          </h3>
        </div>
      </div>

      {/* Middle Section */}
      <div className="col-span-5 flex  flex-grow flex-col justify-start">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          {brand.brand_name}
        </h2>
        <p className="text-gray-600 text-sm  line-clamp-2  ">
          <span className="font-medium text-gray-800">Description: </span>
          {brand.description}
        </p>
      </div>

      {/* Right Section */}
      <div className="col-span-1 flex lg:flex-col items-center justify-between">
        <div className="text-sm text-gray-600 mb-4 sm:mb-0 text-center sm:text-right">
          <h3 className="font-semibold text-gray-800">
            Coupons: <span className="text-blue-500">{brand.coupons.length}</span>
          </h3>
          {brand.isSaleOn && (
            <p className="text-green-500 font-semibold mt-1">Sale is On!</p>
          )}
        </div>
        <Link
          to={`/private/brand-details/${brand._id}`}
          onClick={() => setId(brand._id)}
          className="btn btn-sm  btn-outline"
        >
          View Coupons
        </Link>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default Brands;
