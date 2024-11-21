import Banner from "../components/Banner";
import BrandsOnSale from "../components/BrandsOnSale";
import TopCoupons from "../components/TopCoupons";
import HowToUse from "./HowToUse";


const HomeLayout = () => {
  return <div>
    <Banner></Banner>
    <BrandsOnSale></BrandsOnSale>
    <TopCoupons></TopCoupons>
    <HowToUse></HowToUse>
  </div>;
};

export default HomeLayout;