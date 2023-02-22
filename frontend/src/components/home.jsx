import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Navbar from "./navbar";
import '../styles/home.scss'

const Home = () => {
    const user = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        axios.post('/logout').then(() => user.getUser());
    }

    return(
        <div>
            <Navbar/>
            <div className="home-wrapper">
            Hello World!
            <button onClick={handleLogout}>Logout</button>
            <button onClick={()=>navigate('/')}>Home</button>
            <button onClick={()=>navigate('/profile')}>Profile</button>
            </div>
        </div>
    );
};

export default Home;