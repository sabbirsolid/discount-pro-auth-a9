import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const BrandDetails = () => {
  const {id, data } = useContext(AuthContext);
  const singleBrand = data.find((brand) => brand._id === id);
  // console.log(singleBrand);
  return (
    <div>
      <div className="flex">
        <img src={singleBrand.brand_logo} alt="brand_logo" />
        <div>
          <h2>{singleBrand.brand_name}</h2>
          <p>{singleBrand.description}</p>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;