import '../styles/navbar.scss';
import { UserContext } from '../App';
import { useContext } from 'react';

const Navbar = () => {
    const user = useContext(UserContext)

    return(
        <div className="navbar-wrapper">
            <div className="button-group">
                <div className="icon">
                    <i className="fa-brands fa-facebook"></i>
                </div>
                <div className="searchbar">
                    SearchBar
                </div>
            </div>
            <div className="button-group-long">
                <div className="icon">
                    <i className="fa-solid fa-house"></i>
                </div>
                <div className="icon">
                    <i className="fa-brands fa-youtube"></i>
                </div>
                <div className="icon">
                    <i className="fa-solid fa-store"></i>
                </div>
                <div className="icon">
                    <i className="fa-solid fa-people-group"></i>
                </div>
                <div className="icon">
                    <i className="fa-brands fa-facebook-messenger"></i>
                </div>
            </div>
            <div className="button-group">
                <div className="icon-round">
                    {user.user.username}
                </div>
                <div className="icon-round">
                    <i className="fa-solid fa-plus"></i>
                </div>
                <div className="icon-round">
                    <i className="fa-solid fa-bell"></i>
                </div>
                <div className="icon-round">
                    <i className="fa-solid fa-caret-down"></i>
                </div>
            </div>
        </div>
    );
}

export default Navbar