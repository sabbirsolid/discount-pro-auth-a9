import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from "react-toastify";

const TopCoupons = () => {
  const {data,setSelectedCoupons} = useContext(AuthContext);
  const extractNumber = (str) => {
    const match = str.match(/\d+/); // Regular expression to find one or more digits
    return match ? parseInt(match[0], 10) : null; // Convert the match to an integer or return null
  };

const filteredData = data.flatMap((brand) => {
    const qualifyingCoupons = brand.coupons.filter(
      (coupon) => extractNumber(coupon.description) > 20
    );
    // const selectedCoupons = 
    // Return an array of objects containing only brand ID and coupons
    // setSelectedCoupons(selectedCoupons);
    return qualifyingCoupons.map((coupon) => ({
      brand_name: brand.brand_name,
      coupon,
    }));
  });
  // setSelectedCoupons(filteredData);
  console.log(filteredData);
    return (
        <div className="lg:w-9/12 w-11/12 mx-auto p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Top Coupons
          </h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
            {filteredData.map((coupon) => (
              <div
                key={coupon._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-5 flex flex-col"
              >
                
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {coupon.brand_name}
                </h3>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {coupon.coupon.description}
                </h3>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Type:</span> {coupon.coupon_type}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Expires On:</span>{" "}
                  {coupon.coupon.expiry_date}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Condition:</span>{" "}
                  {coupon.coupon.condition}
                </p>
                <CopyToClipboard
          text={coupon.coupon.coupon_code}
          onCopy={() => toast.success(`Successfully Copied! Code: ${coupon.coupon.coupon_code}`)}
        >
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-2 rounded-lg hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
            Copy Code
          </button>
        </CopyToClipboard>
              </div>
            ))}
          </div>
        </div>
      );
};
export default TopCoupons;
