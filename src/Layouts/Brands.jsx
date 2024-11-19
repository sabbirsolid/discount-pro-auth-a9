import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Brands = () => {
  const { data, setId } = useContext(AuthContext);
  //   console.log(data);
  return (
    <div className=" space-y-5">
      <nav>
        <Navbar></Navbar>
      </nav>
      <h1 className="font-bold text-3xl text-center text-gray-700">
        Select Your Brands from the List
      </h1>
      <div className="join flex justify-center items-center">
        <input
          className="input input-bordered join-item"
          placeholder="type your brand name"
        />
        <button className="btn join-item rounded-r-full">Search</button>
      </div>
      <div className="flex flex-col w-8/12 mx-auto gap-10">
        {data.map((brand) => (
          <div className=" bg-base-100 p-7 grid grid-cols-8 gap-4 rounded-lg shadow-xl">
            {/* left */}
            <div className="col-span-2">
              <figure>
                <img src="logo" alt="Brand_logo" />
              </figure>
              <h3>
                Rating:
                {brand.rating}
              </h3>
            </div>
            {/* middle */}
            <div className="col-span-4">
              <h2 className="card-title">{brand.brand_name}</h2>
              <p>Description: {brand.description} </p>
            </div>
            {/* Third */}
            <div className="col-span-2">
              <h3>Coupons: {brand.coupons.length}</h3>
              <p>{brand.isSaleOn ? "Sale is On" : ""}</p>
              <Link
                to={`/private/brand-details/${brand._id}`}
                onClick={() => setId(brand._id)}
                className="btn"
              >
                View Coupons
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
