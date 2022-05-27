import React, { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0)


    const handleIncrease = (): void => {
        setCount(count + 1)
    }

    return (
        <div>
            <h2>Hello TypeScript!</h2>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
};

export default Counter;