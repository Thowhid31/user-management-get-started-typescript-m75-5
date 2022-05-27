import React, { useState } from 'react';


interface User{
    name?: string,
    job?: string
}

const Counter = () => {

    const [count, setCount] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null)

    const handleSubmit = e => {
        e.preventDefault();
        const userData = {
            name: 'Admin',
            job: 'Developer'
        }
        setUser(userData)
    }


    const handleIncrease = (): void => {
        setCount(count + 1)
    }
    const handleDecrease = (): void => {
        setCount(count - 1)
    }

    return (
        <div>
            <h2>Hello TypeScript!</h2>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    );
};

export default Counter;