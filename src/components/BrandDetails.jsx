import Navbar from "./Navbar";
import { FaStar } from "react-icons/fa6";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData } from "react-router-dom";

const BrandDetails = () => {
const data = useLoaderData();
const { coupons, shopLink} = data;
return (
  <div>
  <Navbar />
  <div className="flex gap-10 items-center justify-center bg-slate-200 py-5">
    <img
      className="w-[200px]"
      src={data.brand_logo}
      alt="brand_logo"
    />
    <div>
      <h2 className="font-bold text-3xl">{data.brand_name}</h2>
      <p className="text-lg">{data.description}</p>
      <p className="flex items-center gap-2">
        Rating: {data.rating}{" "}
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} />
          ))}
        </div>
      </p>
    </div>
    <div className="col-span-1">
    <a href={shopLink} target="_blank" className="btn btn-primary" >Use Now</a>
  </div>
  </div>

  {/* Coupon Cards */}
  <div className="grid grid-cols-4 w-9/12 mx-auto gap-5 p-10">
    {coupons.map((coupon) => (
      <div
        key={coupon._id}
        className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
      >
        <div className="p-4">
          {/* Coupon Description */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {coupon.description}
          </h3>

          {/* Coupon Type */}
          <p className="text-sm text-gray-600">
            <span className="font-semibold text-gray-700">Type: </span>
            {coupon.coupon_type}
          </p>

          {/* Expiry Date */}
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-semibold text-gray-700">Expires On: </span>
            {coupon.expiry_date}
          </p>

          {/* Condition */}
          <div className="mt-3">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-700">Condition: </span>
              {coupon.condition}
            </p>
          </div>

          {/* Copy Coupon Button */}
          <div className="mt-4">
            <CopyToClipboard
              text={coupon.coupon_code}
              onCopy={() => toast.success(`Copied: ${coupon.coupon_code}`)}
            >
              <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">
                Copy Code
              </button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    ))}
  </div>
  
</div>
);
};

export default BrandDetails;
