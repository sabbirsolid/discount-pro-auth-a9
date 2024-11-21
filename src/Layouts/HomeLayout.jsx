import { useContext } from "react";
import Banner from "../components/Banner";
import BrandsOnSale from "../components/BrandsOnSale";
import TopCoupons from "../components/TopCoupons";
import HowToUse from "./HowToUse";
import { AuthContext } from "../Providers/AuthProvider";


const HomeLayout = () => {
  const {loading} = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <span className="loading loading-spinner text-info text-5xl"></span>
      </div>
    );
  }
  return <div>
    <Banner></Banner>
    <BrandsOnSale></BrandsOnSale>
    <TopCoupons></TopCoupons>
    <HowToUse></HowToUse>
  </div>;
};

export default HomeLayout;