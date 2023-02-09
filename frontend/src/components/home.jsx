import axios from "axios";
import { redirect } from "react-router-dom";
import Cookies from "js-cookie";

const Home = () => {
    let session = Cookies.get('session')
    console.log(session);

    const handleLogout = () => {
        axios.get('/logout').then(redirect('/login'))
    }
    return(
        <div>
            Hello world!
            <button>Logout</button>
        </div>
    );
};

export default Home