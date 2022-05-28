import React, { useEffect, useState } from 'react';
import UserModal from '../types/models';
import Use from './Use';

const Users = () => {

    const [users, setUsers] = useState<UserModal[]>([])

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const handleAddUser = ():void => {

    }

    return (
        <div>
            <h1>My Users</h1>
            {/* <Use name='Rohomot' age={55} addUser={handleAddUser}></Use> */}

            {
                users.map(user => <Use user={user} addUser={handleAddUser}></Use>)
            }
        </div>
    );
};

export default Users;