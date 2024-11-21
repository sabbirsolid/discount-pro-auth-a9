import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
       <Helmet>
                <title>Page Not Found</title>
               
            </Helmet>
      <h1 className="text-5xl font-bold">404 Error</h1>
      <h2 className="text-2xl font-semibold">Page not Found</h2>
      <Link to="/" className="px-4 mt-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
       Go to Home
      </Link >
    </div>
  );
};
export default Error;
