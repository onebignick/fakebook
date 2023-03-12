import { useContext } from 'react';
import { UserContext } from '../App';
import '../styles/createPost.scss'

const CreatePost = () => {
    const user = useContext(UserContext);

    return(
        <div className="post-wrapper">
            <div className="post-flexbox">
                <div className="post-box">
                    <img className="icon-round" src={user.user.profile_picture} alt=""/>
                    <div className="post-button">
                        <div className="post-text">What's on your mind {user.user.firstname}</div>
                    </div>
                </div>
                <div className="button-box">
                    <div>Live video</div>
                    <div>Photo/video</div>
                    <div>Feeling/activity</div>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;