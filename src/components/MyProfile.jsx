import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const MyProfile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <h1>My Profile</h1>
        </div>
    );
};

export default MyProfile; 