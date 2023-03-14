import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../App';
import '../styles/userPopup.scss'

const UserPopup = (props) => {
    const user = useContext(UserContext);

    const handleLogout = () => {
        axios.post('/logout').then((response) => {
            user.getUser();
        })
    }

    return(
        <div className="user-popup-overlay" onClick={props.userpopup}>
            <div className="user-popup-window" onClick={(e)=>{
                e.stopPropagation();
            }}>
                <div className='user-popup-link' onClick={handleLogout}>
                    Log Out
                </div>
            </div>
        </div>
    );
}

export default UserPopup;