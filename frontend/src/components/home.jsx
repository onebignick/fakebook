import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Home = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post('/logout').then(() => user.getUser());
    }

    return(
        <div>
            Hello World!
            <button onClick={handleLogout}>Logout</button>
            <button onClick={()=>navigate('/')}>Home</button>
            <button onClick={()=>navigate('/profile')}>Profile</button>
        </div>
    );
};

export default Home;