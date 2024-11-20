import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaStar } from "react-icons/fa";

const BrandsInfo = () => {
  const {data} = useContext(AuthContext);

  return (
    <div className="lg:w-8/12 w-11/12 mx-auto space-y-4">
      <h1 className="font-bold text-center text-3xl">Top Brands</h1>
      <Marquee
        pauseOnHover={true}
        speed={100}
        className="text-xl font-semibold bg-neutral-100 py-3"
      >
        {data.map((brand) => (
          <Link to={`/private/brand-details/${brand._id}`} key={brand._id} className="mx-6">
            <img
              src={brand.brand_logo}
              alt={brand.brand_name}
              className="h-12 w-auto object-contain mx-6" // Maintain aspect ratio
            />
          </Link>
        ))}
      </Marquee>
      <h1 className="font-bold text-center text-3xl">Brands are on Sale</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        eligendi quisquam vitae, deleniti asperiores minus voluptatem autem
        doloribus quo dolor.
      </p>
   

<Link to='/brands' className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 p-4">
  {data.map(
    (brand) =>
      brand.isSaleOn && (
        <div className="card bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out duration-300 h-[350px]">
          <figure className="relative">
            <img 
              src={brand.brand_logo} 
              alt={`${brand.brand_name} logo`} 
              className="w-full h-36 object-cover rounded-t-lg"
            />
            
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title text-xl font-bold text-gray-800 flex justify-between items-center">
              {brand.brand_name}
              <div className="badge bg-primary text-white text-xs px-2 py-1 rounded-full">
                {brand.isSaleOn ? 'Sale On' : 'Shop Now'}
              </div>
            </h2>
            <div className="flex items-center space-x-2">
              <div className="flex items-center text-yellow-500">
                {[...Array(5)].map((_, index) => (
                  <FaStar key={index} className={index < brand.rating ? 'text-yellow-500' : 'text-gray-300'} />
                ))}
              </div>
              <span className="text-gray-600">{brand.rating}</span>
            </div>
            <p className="text-md text-gray-800 ">
              <span className="font-bold">Description:</span> {brand.description}
            </p>
            <div className="flex gap-2">
              <h3 className="text-md font-bold text-gray-800">Coupons:</h3>
              <p className="text-gray-700">{brand.coupons.length} Coupons Available</p>
            </div>
            <div className="card-actions flex justify-end items-center mt-4">
              <div className="badge badge-outline text-sm text-gray-600">{brand.category}</div>
            </div>
          </div>
        </div>
      )
  )}
</Link>

    </div>
  );
};

export default BrandsInfo;
