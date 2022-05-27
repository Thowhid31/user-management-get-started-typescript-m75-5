import React, { FC } from 'react';

interface Props{
    name: string,
    age: number
}

const Use: FC<Props> = ({name, age}) => {

    
    return (
        <div>
            <h2>Hello from: {name} with Experience {age}</h2>
        </div>
    );
};

export default Use;