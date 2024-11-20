import { useEffect, useState } from "react";

import CopyToClipboard from "react-copy-to-clipboard";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const TopCoupons = () => {
  const [data,setData] = useState([]);
  useEffect(() =>{
    fetch("/topCoupons.js")
    .then(response => response.json())
    .then(data => setData(data))
  },[])

    return (
        <div className="lg:w-9/12 w-11/12 mx-auto p-6">
           <Helmet>
                <title>Top Coupons | Discount Pro</title>
               
            </Helmet>
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Top Coupons
          </h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
            {data.map((brand) => (
              brand.coupons.map(coupon => (
                <div
                key={coupon.coupon_code}
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-5 flex flex-col"
              >
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {brand.brand_name}
                </h3>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {coupon.description}
                </h3>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Type:</span> {coupon.coupon_type}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Expires On:</span>{" "}
                  {coupon.expiry_date}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Condition:</span>{" "}
                  {coupon.condition}
                </p>
                <CopyToClipboard
          text={coupon.coupon_code}
          onCopy={() => toast.success(`Successfully Copied! Code: ${coupon.coupon_code}`)}
        >
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
            Copy Code
          </button>
        </CopyToClipboard>
              </div>
              ))
            ))}
          </div>
        </div>
      );
};
export default TopCoupons;
