import { Link } from "react-router-dom";

const HowToUse = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        {/* Section Heading */}
        <div className="bg-blue-500 text-white rounded-md p-4 mb-6 text-center">
          <h1 className="text-3xl font-bold">How to Use?</h1>
        </div>

        {/* Instructions List */}
        <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-4">
          <li>
            Explore a wide array of discount codes at <span className="font-semibold text-blue-500">Discount Pro </span> 
            and find deals for your favorite online stores.
          </li>
          <li>
            Use our platform to search and select the most suitable coupon code for the brand or product you want to buy. 
            The process is designed to be simple and user-friendly.
          </li>
          <li>
            Click on the <Link to="/brands" className="font-semibold text-blue-500">"Visit Available Brands"</Link> button 
            to get the code and navigate to the brand's online store.
          </li>
          <li>
            During checkout, locate the promo code or coupon code box, and paste the special voucher code from 
            <span className="font-semibold text-blue-500"> discounts-pro.com</span>.
          </li>
          <li className="font-semibold text-gray-700">
            Apply the discount and enjoy your savings for your next shopping spree!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HowToUse;
