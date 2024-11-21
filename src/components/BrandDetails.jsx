import { FaStar } from "react-icons/fa6";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ExclusiveDeals from "./ExclusiveDeals";

const BrandDetails = () => {
const data = useLoaderData();
const { coupons, shopLink} = data;
return (
  <div>
     <Helmet>
                <title>Brand Details | Discount Pro</title>
               
            </Helmet>
  <div className="flex flex-col lg:flex-row gap-10 items-center justify-center bg-white shadow-lg rounded-lg p-6 lg:p-10 border border-gray-300">
  {/* Brand Logo */}
  <div className="w-[200px] flex-shrink-0">
    <img
      className="w-full object-contain rounded-lg border border-gray-200"
      src={data.brand_logo}
      alt="brand_logo"
    />
  </div>

  {/* Brand Details */}
  <div className="text-center lg:text-left max-w-lg">
    <h2 className="font-bold text-4xl text-gray-800 mb-3">
      {data.brand_name}
    </h2>
    <p className="text-lg text-gray-600 mb-4">
      {data.description}
    </p>
    <p className="flex items-center gap-2 justify-center lg:justify-start text-gray-700">
      <span className="font-medium">Rating:</span>
      {data.rating}
      <div className="flex text-yellow-500">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} />
        ))}
      </div>
    </p>
  </div>

  {/* Action Button */}
  <div>
    <a
      href={shopLink}
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300"
    >
      Use Now
    </a>
  </div>
</div>

  {/* Coupon Cards */}
  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:w-9/12 w-11/12 mx-auto gap-5 p-4 lg:p-10">
  {coupons.map((coupon) => (
    <div
      key={coupon._id}
      className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col"
    >
      {/* Card Content */}
      <div className="p-5 flex-grow">
        {/* Coupon Description */}
        <h3 className="text-lg font-bold text-gray-800 mb-3">
          {coupon.description}
        </h3>

        {/* Coupon Type */}
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold text-gray-700">Type: </span>
          {coupon.coupon_type}
        </p>

        {/* Expiry Date */}
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold text-gray-700">Expires On: </span>
          {coupon.expiry_date}
        </p>

        {/* Condition */}
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-700">Condition: </span>
          {coupon.condition}
        </p>
      </div>

      {/* Sticky Button */}
      <div className="p-5 bg-gray-50 border-t border-gray-200">
        <CopyToClipboard
          text={coupon.coupon_code}
          onCopy={() => toast.success(`Successfully Copied! Code: ${coupon.coupon_code}`)}
        >
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
            Copy Code
          </button>
        </CopyToClipboard>
      </div>
    </div>
  ))}
</div>

{/* Exclusive Deals Section */}
{/* <ExclusiveDeals></ExclusiveDeals> */}
</div>
);
};

export default BrandDetails;
