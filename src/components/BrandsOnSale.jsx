import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaStar } from "react-icons/fa";
import "animate.css";

const BrandsOnSale = () => {
  const { data } = useContext(AuthContext);

  return (
    <div className="lg:w-8/12 w-11/12 mx-auto my-10 ">
      {/* Top brands section */}
      <div className="my-10">
        {/* Animate the heading */}
        <h1 className="font-bold text-center my-2 text-3xl animate__animated animate__fadeInUp">
          Top Brands
        </h1>

        {/* Marquee for brands */}
        <Marquee
          pauseOnHover={true}
          speed={100}
          className="text-xl font-semibold bg-neutral-100 rounded-lg"
        >
          {data.map((brand) => (
            <Link
              to={"/brands"}
              // to={`/private/brand-details/${brand._id}`}
              key={brand._id}
              className="mx-6 animate__animated animate__fadeInLeft"
            >
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="h-12 w-auto object-contain mx-6"
              />
            </Link>
          ))}
        </Marquee>
      </div>

      {/* Animate the subheading */}
      <div className="space-y-3">
      <h1 className="font-bold text-center text-3xl animate__animated animate__fadeInUp">
        Brands are on Sale
      </h1>
      <p className="text-center lg:w-5/6 mx-auto">
        Explore incredible discounts on a wide range of categories, from fashion
        and electronics to beauty and groceries. Our coupon-collecting website
        offers exclusive deals and promotions updated daily, ensuring you save
        big and shop smarter with every purchase!
      </p>
      </div>

      {/* Cards with animations */}
      <Link
        to="/brands"
        className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-4 my-5"
      >
        {data.map(
          (brand) =>
            brand.isSaleOn && (
              <div
                key={brand._id}
                className="card bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 h-[350px] transform hover:scale-105 hover:bg-gray-50 animate__animated animate__zoomIn"
              >
                <figure className="relative">
                  <img
                    src={brand.brand_logo}
                    alt={`${brand.brand_name} logo`}
                    className="w-56 h-44 object-contain rounded-2xl"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-xl font-bold text-gray-800 flex justify-between items-center">
                    {brand.brand_name}
                    <div className="badge bg-primary text-white text-xs px-2 py-1 rounded-full">
                      {brand.isSaleOn ? "Sale On" : "Shop Now"}
                    </div>
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, index) => (
                        <FaStar
                          key={index}
                          className={
                            index < brand.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-gray-600">{brand.rating}</span>
                  </div>
                  <p className="text-md text-gray-800">
                    <span className="font-bold">Description:</span>{" "}
                    {brand.description}
                  </p>
                  <div className="flex gap-2">
                    <h3 className="text-md font-bold text-gray-800">
                      Coupons:
                    </h3>
                    <p className="text-gray-700">
                      {brand.coupons.length} Coupons Available
                    </p>
                  </div>
                  <div className="card-actions flex justify-end items-center mt-4">
                    <div className="badge badge-outline text-sm text-gray-600">
                      {brand.category}
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </Link>
    </div>
  );
};

export default BrandsOnSale;
