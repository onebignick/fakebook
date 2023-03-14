import Navbar from "./navbar";
import Sidebar from "./sidebar";
import UserPopup from "./userPopup";
import '../styles/home.scss'
import CreatePost from "./createPost";
import CreateStory from "./createStory";
import { useState } from "react";

const Home = () => {
    const [userPopup, setUserPopup] = useState(false);

    const handleUserPopup = () => {
        setUserPopup(!userPopup)
        console.log(userPopup);
    }

    return(
        <div>
            <Navbar userpopup={handleUserPopup}/>
            {userPopup ? <UserPopup userpopup={handleUserPopup}/> : ""}
            <div className="home-wrapper">
                <Sidebar/>
                <div className="home-feed">
                    <CreateStory/>
                    <CreatePost/>
                </div>
            </div>
        </div>
    );
};

export default Home;