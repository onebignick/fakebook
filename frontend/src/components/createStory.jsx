import '../styles/createStory.scss'
import { useContext, useState } from 'react';
import { UserContext } from '../App';

const CreateStory = () => {
    const user = useContext(UserContext);
    const [isStories, setIsStories] = useState(true);

    if (isStories) {
    return (
        <div className="create-story-wrapper">
            <div className="create-story-flexbox">
                <div className="create-story-buttons">
                    <div className="create-story-button-link" onClick={()=>setIsStories(true)}>
                        Stories
                    </div>
                    <div className="create-story-button-link" onClick={()=>setIsStories(false)}>
                        Reels
                    </div>
                </div>
                <div className="create-story-story">
                    <div className="create-story-story-button">
                        <div className="create-story-picture"><img src={user.user.profile_picture} alt=""/></div>
                        <div className="create-story-plus-button">
                            <div className="create-story-plus">+</div>
                        </div>
                        <div className="create-story-button-description">
                            Create story
                        </div>
                    </div>
                    <div className="create-story-story-flexbox">
                        <div className="create-story-story-description">
                            Share everyday moments with friends and family.
                        </div>
                        <div className="create-story-story-description">
                            Stories disappear after 24 hours.
                        </div>
                        <div className="create-story-story-description">
                            Replies and reactions are private.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );} else {
        return(
            <div className="create-story-wrapper">
                <div className="create-story-flexbox">
                    <div className="create-story-buttons">
                        <div className="create-story-button-link" onClick={()=>setIsStories(true)}>
                            Stories
                        </div>
                        <div className="create-story-button-link" onClick={()=>setIsStories(false)}>
                            Reels
                        </div>
                    </div>
                    <div className="create-story-story">
                        <div className="other-story">
                        <div className="create-story-story-button"></div>
                        <div className="create-story-story-button"></div>
                        <div className="create-story-story-button"></div>
                        <div className="create-story-story-button"></div>
                        <div className="create-story-story-button"></div>
                        <div className="create-story-story-button"></div>
                        <div className="create-story-story-button"></div>
                        <div className="create-story-story-button"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateStory;