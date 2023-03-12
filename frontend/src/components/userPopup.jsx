import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../App';
import '../styles/userPopup.scss'

const UserPopup = () => {
    const user = useContext(UserContext);

    const handleLogout = () => {
        axios.post('/logout').then((response) => {
            user.getUser();
        })
    }

    return(
        <div className="user-popup-window">
            <div>
                Hello World!
            </div>
            <div className='logout' onClick={handleLogout}>
                Log Out
            </div>
        </div>
    );
}

export default UserPopup;