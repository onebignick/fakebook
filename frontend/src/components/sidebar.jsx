import '../styles/sidebar.scss';
import { UserContext } from '../App';
import { useContext, useState } from 'react';

const Sidebar = () => {
    const user = useContext(UserContext);
    const [seeMore, setSeeMore] = useState(false);

    if (seeMore) {
        return(
            <div className='sidebar-wrapper'>
            <div className='sidebar-group'>
                <div className='sidebar-link'>
                    <img className="profile-picture" src={user.user.profile_picture} alt=""/>
                    <span>{user.user.firstname} {user.user.lastname}</span>
                </div>
                <div className='sidebar-link'>
                    <i class="fa-solid fa-user-group"></i>
                    <span>Watch</span>
                </div> 
                <div className='sidebar-link'>
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <span>Most Recent</span>
                </div>
                <div className='sidebar-link'>
                    <i className="fa-brands fa-facebook"></i>
                    <span>Welcome</span>
                </div>                 
                <div className='sidebar-link'>
                    <span>Groups</span>
                </div>
                <div className='sidebar-link'>
                    <span>Marketplace</span>
                </div>
                <div className='sidebar-link'>
                    <span>Watch</span>
                </div>
                <div className='sidebar-link'>
                    <span>Memories</span>
                </div>
                <div className='sidebar-link'>
                    <span>Saved</span>
                </div>
                <div className='sidebar-link'>
                    <span>Pages</span>
                </div>
                <div className='sidebar-link'>
                    <span>Events</span>
                </div>
                <div className='sidebar-link'>
                    <span>Ad Center</span>
                </div>
                <div className='sidebar-link'>
                    <span>Ads Manager</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Blood Donations</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Climate Science Centre</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Crisis Response</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Favourites</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Fundraisers</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Gaming video</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Live videos</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Messenger</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Orders and payments</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Play games</span>
                </div>        
                <div className='sidebar-link'>
                    <span>Recent ad activity</span>
                </div>                       
                <div className='sidebar-link' onClick={() => setSeeMore(false)}>
                    <span>See less</span>
                </div>        
            </div>
        </div>
        );
    }
    else {
    return(
        <div className='sidebar-wrapper'>
            <div className='sidebar-group'>
                <div className='sidebar-link'>
                    <img className="profile-picture" src={user.user.profile_picture} alt=""/>
                    <span>{user.user.firstname} {user.user.lastname}</span>
                </div>
                <div className='sidebar-link'>
                    <i class="fa-solid fa-user-group"></i>
                    <span>Watch</span>
                </div> 
                <div className='sidebar-link'>
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <span>Most Recent</span>
                </div>
                <div className='sidebar-link'>
                    <i className="fa-brands fa-facebook"></i>
                    <span>Welcome</span>
                </div>                 
                <div className='sidebar-link'>
                    <span>Groups</span>
                </div>
                <div className='sidebar-link'>
                    <span>Marketplace</span>
                </div>
                <div className='sidebar-link'>
                    <span>Watch</span>
                </div>
                <div className='sidebar-link'>
                    <span>Memories</span>
                </div>
                <div className='sidebar-link'>
                    <span>Saved</span>
                </div>
                <div className='sidebar-link'>
                    <span>Pages</span>
                </div>
                <div className='sidebar-link'>
                    <span>Events</span>
                </div>
                <div className='sidebar-link' onClick={() => setSeeMore(true)}>
                    <span>See More</span>
                </div>               
            </div>
        </div>
    );};
};

export default Sidebar