import React, { FC } from 'react';
import UserModal from '../types/models';

// interface Props{
//     name: string,
//     age: number,
//     addUser: () => void
// }

interface Props {
    user: UserModal,
    addUser: () => void
}

const Use: FC<Props> = ({user, addUser}) => {

    
    return (
        <div>
            <h2>Hello from: {user.name} with Experience {user.email}</h2>
            <button onClick={addUser}>Add me</button>
        </div>
    );
};

export default Use;