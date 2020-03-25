import React from 'react';
import Gravatar from "react-gravatar";

const UserAvatar = ({user}) => (
    <React.Fragment>
        <Gravatar email={user.email} size={200} />
        <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.postsCount}</p>
        </div>
    </React.Fragment>
)

export default UserAvatar;