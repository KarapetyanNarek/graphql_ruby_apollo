import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';
import UserAvatar from './UserAvatar';
import CreateUser from './CreateUser';

const GET_USERS = gql`{
    users {
        id
        name
        email
        PostsCount
    }
}`;


function User({selectUser}) {
    const {loading, error, data} = useQuery(GET_USERS);

    if(loading) return 'Loading ...';
    if(error) return `Error: ${error.message}`;

    return (
        <div>
            {data.users.map(user => {
                <div key={user.id} onClick = "{selectUser.bind(this, user)}">
                    <UserAvatar user = {user} />
                </div>
            })}
        </div>
    )
}