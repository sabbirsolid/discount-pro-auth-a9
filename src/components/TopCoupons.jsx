import { useContext, useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";

const TopCoupons = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/topCoupons.js")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto p-6">
      <Helmet>
        <title>Top Coupons | Discount Pro</title>
      </Helmet>
      <div className="bg-gray-50 py-10 shadow-lg rounded-lg">
  <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
    Top Coupons
  </h1>
  <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
    Discover the best deals and discounts on your favorite brands. Grab these top coupons before they expire!
  </p>
</div>

{/* Card Grid */}
<div className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 mt-8">
  {data.map((brand) =>
    brand.coupons.map((coupon) => (
      <div
        key={coupon.coupon_code}
        className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
      >
        {/* Card Header - Minimal Look */}
        <div className="p-4 border-b border-gray-200 bg-gray-100">
          <h3 className="text-lg font-medium text-gray-800">{brand.brand_name}</h3>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          <p className="text-gray-800">
            <span className="font-semibold">Description:</span>{" "}
            {coupon.description}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Expires On:</span> {coupon.expiry_date}
          </p>
          <p className="text-gray-800">
            <span className="font-semibold">Condition:</span> {coupon.condition}
          </p>
        </div>

        {/* Card Footer */}
        <div className="bg-gray-50 p-4 flex items-center justify-between border-t border-gray-200">
          {user ? (
            <CopyToClipboard
              text={coupon.coupon_code}
              onCopy={() =>
                toast.success(`Successfully Copied! Code: ${coupon.coupon_code}`)
              }
            >
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all">
                Copy Code
              </button>
            </CopyToClipboard>
          ) : (
            <Link
              to="/auth/login"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all"
            >
              Login to Collect
            </Link>
          )}
        </div>
      </div>
    ))
  )}
</div>



    </div>
  );
};
export default TopCoupons;
