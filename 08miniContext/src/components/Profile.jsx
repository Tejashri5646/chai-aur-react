import UserContext from "../context/UserContext";
import { useContext } from "react";
function Profile() {
    const {user} = useContext(UserContext);
    if(!user) return <div>Please Login!</div>

    return <div>Welcome {user}!</div>
}

export default Profile