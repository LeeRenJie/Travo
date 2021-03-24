import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {
    //dummy database for users, will link to backend 
    const USERS = [
        {id: 'u1',
        name: "Tom Holland", 
        image: 'https://i.insider.com/600853e6e3d62500185fd576',
        places: 3
        },
        {id: 'u2',
        name: "Tom Holland", 
        image: 'https://i.insider.com/600853e6e3d62500185fd576',
        places: 1
        }
    ];

    return (
        <div>
        {/*send the USERS JSON as props to UserList */}
            <UsersList items={USERS} />
        </div>
        )
};

export default Users;