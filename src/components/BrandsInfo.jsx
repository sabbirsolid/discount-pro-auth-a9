import { useContext } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const BrandsInfo = () => {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("../../public/brandsInfo.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, []);
  // console.log(data);
  const {data} = useContext(AuthContext);
  // console.log(data);
  return (
    <div className="lg:w-8/12 w-11/12 mx-auto space-y-4">
      <h1 className="font-bold text-center text-3xl">Top Brands</h1>
      <Marquee
        pauseOnHover={true}
        speed={100}
        className="text-xl font-semibold bg-neutral-100 py-2"
      >
        {data.map((brand) => (
          <Link key={brand.id} className="mx-4">
            {brand.brand_name}
          </Link>
        ))}
      </Marquee>
      <h1 className="font-bold text-center text-3xl">Brands are on Sale</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
        eligendi quisquam vitae, deleniti asperiores minus voluptatem autem
        doloribus quo dolor.
      </p>
      <Link to='/brands'  className="grid lg:grid-cols-3 md:grid-cols-2 gap-20">
        {data.map(
          (brand) =>
            brand.isSaleOn && (
              <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  <img src="logo" alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {brand.brand_name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <h3>Coupons: {brand.coupons.length}</h3>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">{brand.category}</div>
                  </div>
                </div>
              </div>
            )
        )}
      </Link>
    </div>
  );
};

export default BrandsInfo;
