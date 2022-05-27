import React from 'react';
import Use from './Use';

const Users = () => {

    const handleAddUser = ():void => {

    }

    return (
        <div>
            <h1>My Users</h1>
            <Use name='Rohomot' age={55} addUser={handleAddUser}></Use>
        </div>
    );
};

export default Users;