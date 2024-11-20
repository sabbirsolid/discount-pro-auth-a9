
const topCouponsData = [
    {
      _id: "1",
      description: "Save 50% on electronics!",
      coupon_type: "Discount",
      expiry_date: "2024-12-31",
      condition: "Minimum purchase $100",
      coupon_code: "ELEC50",
    },
    {
      _id: "2",
      description: "Buy 1 Get 1 Free on shoes",
      coupon_type: "BOGO",
      expiry_date: "2024-11-30",
      condition: "Selected items only",
      coupon_code: "BOGO2024",
    },
  ];

const TopCoupons = () => {
    return (
        <div className="lg:w-9/12 w-11/12 mx-auto p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Top Coupons
          </h1>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
            {topCouponsData.map((coupon) => (
              <div
                key={coupon._id}
                className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-5 flex flex-col"
              >
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
                <button className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                  Copy Code: {coupon.coupon_code}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
};

export default TopCoupons;