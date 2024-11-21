import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Brands = () => {
  const { data, setId } = useContext(AuthContext);
  return (
    <div className=" space-y-5 py-5">
      <Helmet>
        <title>Brands | Discount Pro</title>
      </Helmet>
      {/* Section Header */}
      <div className="p-6  rounded-lg shadow-md">
        <h1 className="font-bold text-3xl text-center text-gray-700 mb-6">
          Select Your Brands from the List
        </h1>
        <div className=" flex w-1/5 mx-auto gap-2 justify-center items-center">
          {/* Input Field */}
          <input
            className="input input-bordered  flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type your brand name"
          />
          {/* Search Button */}
          <button className=" bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
            Search
          </button>
          <Link
              to="/private/top-coupons"
              className=" bg-indigo-700 hover:bg-indigo-800 text-white font-semibold btn rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Top Coupons
            </Link>
          
        </div>
        
      </div>

      {/* main cards */}

      <div className="flex flex-col w-11/12  lg:w-8/12 mx-auto gap-6">
        {data.map((brand) => (
          <div className="bg-white w-11/12 mx-auto p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 lg:grid grid-cols-7 gap-4 border border-gray-300">
            {/* Top Section for Mobile */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="w-24 h-24">
                <figure className="mx-auto flex flex-grow sm:w-full sm:h-auto">
                  <img
                    className="w-full h-full object-contain"
                    src={brand.brand_logo}
                    alt="Brand Logo"
                  />
                </figure>
              </div>
              <div className="text-center mt-2">
                <h3 className="text-gray-500 text-sm font-medium flex items-center justify-center">
                  <span className="font-semibold text-gray-800 mr-1">
                    Rating:
                  </span>
                  {brand.rating}
                  <span className="text-yellow-500 ml-1 flex">
                    <FaStar />
                  </span>
                </h3>
              </div>
            </div>

            {/* Middle Section */}
            <div className="col-span-5 flex flex-grow flex-col mb-10 lg:mb-0 justify-start">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {brand.brand_name}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-2">
                <span className="font-medium text-gray-800">Description: </span>
                {brand.description}
              </p>
            </div>

            {/* Right Section */}
            <div className="col-span-1 flex lg:flex-col items-center justify-between">
              <div className="text-sm text-gray-600 mb-2 sm:mb-0 text-center sm:text-right">
                {brand.isSaleOn && (
                  <p className="text-green-500 font-semibold mt-1 animate-bounce">
                    Sale is On!
                  </p>
                )}
                <h3 className="font-semibold text-gray-800">
                  Coupons:{" "}
                  <span className="text-blue-500">{brand.coupons.length}</span>
                </h3>
              </div>
              <Link
                to={`/private/brand-details/${brand._id}`}
                onClick={() => setId(brand._id)}
                className="btn btn-sm btn-outline bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md transition-all duration-200 transform hover:scale-105"
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
