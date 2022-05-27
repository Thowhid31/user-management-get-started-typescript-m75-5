import React, { FC } from 'react';

interface Props{
    name: string,
    age: number,
    addUser: () => void
}

const Use: FC<Props> = ({name, age, addUser}) => {

    
    return (
        <div>
            <h2>Hello from: {name} with Experience {age}</h2>
            <button onClick={addUser}>Add me</button>
        </div>
    );
};

export default Use;