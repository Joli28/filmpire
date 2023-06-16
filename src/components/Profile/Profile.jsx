import React from 'react';
import { useSelector } from 'react-redux';


const Profile = () => {
    const { user } = useSelector((state) => state.user);
    console.log(user);
    console.log("Profile");
    return (
        <div>
            Profile - {user.username}
        </div>
    )
}

export default Profile;
