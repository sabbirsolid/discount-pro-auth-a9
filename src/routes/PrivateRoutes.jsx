import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    // console.log(user);
    if (loading) {
        // Show a loading indicator while authentication is being determined
        return <div>Loading...</div>;
      }
    if(user && user?.email){
        return children
    }
    else{
        return <Navigate to='/auth/login'></Navigate>
    }
};

export default PrivateRoutes;