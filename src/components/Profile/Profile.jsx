import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./My posts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (<div>
            <div>
                <ProfileInfo />
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;