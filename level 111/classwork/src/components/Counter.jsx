import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleCount = () => {
        setCount(count + 1);
    }

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={handleCount}>Add 1</button>
        </>
    );
}


export default Counter;