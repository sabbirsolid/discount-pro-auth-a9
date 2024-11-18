import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Brands = () => {
  const {data,setId} = useContext(AuthContext);
//   console.log(data);
  return (
    <div className=" space-y-5">
        <nav>
            <Navbar></Navbar>
        </nav>
        <h1 className="font-bold text-3xl text-center text-gray-700">Select Your Brands from the List</h1>
      <div className="join flex justify-center items-center">
        <input className="input input-bordered join-item" placeholder="type your brand name" />
        <button className="btn join-item rounded-r-full">Search</button>
      </div>
      <div className="grid grid-cols-3 w-10/12 mx-auto gap-10">
        {
            data.map(brand => (
                <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <img src="logo" alt="Brand_logo" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {brand.brand_name}
                  </h2>
                  <h3>Rating: 
                    {brand.rating}
                  </h3>
                  <p>Description: {brand.description} </p>
                  <h3>Coupons: {brand.coupons.length}</h3>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{brand.category}</div>
                  </div>
                  <p>{brand.isSaleOn? "Sale is On":""}</p>
                  <Link to={`/private/brand-details`} onClick={() => setId(brand._id)}  className="btn">View Coupons</Link >
                </div>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default Brands;
