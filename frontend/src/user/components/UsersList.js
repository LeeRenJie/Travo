import React from 'react';
import './UsersList.css'

import Card from '../../shared/components/UIElements/Card'
import UserItem from './UserItem'

//Receives data of USERS from [Users.js] as props as "items"
const UsersList = props => {
    //if there are no users
    if (props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                    <h2>No Users Found</h2>
                </Card>
            </div>
        );
    }

    return(
        //if users exist
        <ul className="users-list">
            {props.items.map(user =>(
                <UserItem 
                key={user.id} 
                id={user.id} 
                image={user.image} 
                name={user.name} 
                placeCount={user.places}
                />
            ))}
        </ul>
    )
};

export default UsersList;