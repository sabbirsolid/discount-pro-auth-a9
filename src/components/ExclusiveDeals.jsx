import React, { useState, useEffect } from "react";

const exclusiveDealsData = [
  {
    _id: "1",
    description: "Flat 70% Off on Fashion!",
    coupon_code: "EXC70",
    expiry_date: "2024-11-25T23:59:59", // ISO date for the timer
    condition: "Valid on all orders above $50",
    image: "https://via.placeholder.com/200", // Replace with actual deal image
  },
  {
    _id: "2",
    description: "Get $20 Off on Electronics",
    coupon_code: "EXC20",
    expiry_date: "2024-11-30T23:59:59",
    condition: "Applicable on selected items",
    image: "https://via.placeholder.com/200",
  },
];

const ExclusiveDeals = () => {
  const [deals, setDeals] = useState(exclusiveDealsData);
  const [timeLeft, setTimeLeft] = useState({});

  // Calculate countdown for each deal
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeLeft = {};
      deals.forEach((deal) => {
        const timeRemaining = new Date(deal.expiry_date) - new Date();
        if (timeRemaining > 0) {
          updatedTimeLeft[deal._id] = formatTime(timeRemaining);
        } else {
          updatedTimeLeft[deal._id] = "Expired";
        }
      });
      setTimeLeft(updatedTimeLeft);
    }, 1000);

    return () => clearInterval(interval);
  }, [deals]);

  const formatTime = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / 1000 / 60 / 60) % 24);
    const days = Math.floor(ms / 1000 / 60 / 60 / 24);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="lg:w-9/12 w-11/12 mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Exclusive Deals
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
        {deals.map((deal) => (
          <div
            key={deal._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-5 flex flex-col"
          >
            <img
              src={deal.image}
              alt={deal.description}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {deal.description}
            </h3>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Condition:</span> {deal.condition}
            </p>
            <p className="text-sm text-red-500 font-semibold mt-2">
              {timeLeft[deal._id] || "Loading..."}
            </p>
            <button className="mt-4 bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 rounded-lg shadow-md hover:from-green-600 hover:to-teal-700 transition-all duration-300">
              Copy Code: {deal.coupon_code}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveDeals;
