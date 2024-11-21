import React, { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Helmet } from "react-helmet-async";
import { toast } from "react-toastify";

const ExclusiveDeals = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    fetch("/exclusiveDeals.json")
      .then((response) => response.json())
      .then((data) => setDeals(data));
  }, []);

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
        Some Exclusive Deals from Other Brands
      </h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-5">
        {deals.map((deal) => (
          <div
            key={deal._id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-5 flex flex-col"
          >
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {deal.brand_name}
            </h1>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {deal.description}
            </h3>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Condition:</span> {deal.condition}
            </p>
            <p className="text-sm text-red-500 font-semibold mt-2">
              {timeLeft[deal._id] || "Loading..."}
            </p>
            <div className="flex flex-wrap gap-5 mt-4">
              <CopyToClipboard
                text={deal.coupon_code}
                onCopy={() =>
                  toast.success(
                    `Successfully Copied! Code: ${deal.coupon_code}`
                  )
                }
              >
                <button className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold text-sm uppercase rounded-lg shadow-lg hover:from-green-600 hover:to-teal-700 hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-teal-300">
                  Copy Code
                </button>
              </CopyToClipboard>
              <a
                href={deal.shopLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold text-sm uppercase rounded-lg shadow-lg hover:from-green-600 hover:to-teal-700 hover:shadow-xl transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-teal-300"
              >
                Use Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveDeals;
