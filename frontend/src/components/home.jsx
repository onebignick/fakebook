import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
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
                <Sidebar/>
                <div className="marker">
                    s
                </div>
                <div className="marker">
                    s
                </div>
            </div>
        </div>
    );
};

export default Home;