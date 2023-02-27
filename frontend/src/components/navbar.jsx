import '../styles/navbar.scss';
import { UserContext } from '../App';
import { useContext } from 'react';

const Navbar = () => {
    const user = useContext(UserContext)

    return(
        <div className="navbar-wrapper">
            <div className="button-group left">
                <i className="fa-brands fa-facebook"></i>
                <div className="searchbar">
                    SearchBar
                </div>
            </div>
            <div className="button-group-long">
                <div className="icon">
                    <i className="fa-solid fa-house"></i>
                </div>
                <i class="fa-solid fa-user-group"></i>
                <div className="icon">
                    <i className="fa-solid fa-people-group"></i>
                </div>
            </div>
            <div className="button-group right">
                <i className="fa-solid fa-plus icon-round"></i>
                <i className="fa-solid fa-bell icon-round"></i>
                <i className="fa-brands fa-facebook-messenger icon-round"></i>
                <img className="icon-round" src={user.user.profile_picture} alt=""/>
            </div>
        </div>
    );
}

export default Navbar