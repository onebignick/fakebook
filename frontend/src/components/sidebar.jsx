import '../styles/sidebar.scss';
import { UserContext } from '../App';
import { useContext } from 'react';

const Sidebar = () => {
    const user = useContext(UserContext);

    return(
        <div className='sidebar-wrapper'>
            <div className='sidebar-group'>
                <div className='sidebar-link'>
                    <span>{user.user.username}</span>
                </div>
                <div className='sidebar-link'>
                    <span>Watch</span>
                </div> 
                <div className='sidebar-link'>
                    <span>Events</span>
                </div>
                <div className='sidebar-link'>
                    <span>Friends</span>
                </div>                 
                <div className='sidebar-link'>
                    <span>Memories</span>
                </div>
                <div className='sidebar-link'>
                    <button>See More</button>
                </div>               
            </div>
            <div className='sidebar-group'>
                <div className='sidebar-header'>
                    <span>Shortcuts</span>
                    <span>...</span>
                </div>      
            </div>
        </div>
    );
};

export default Sidebar