import React, { useState } from "react";

const MAX_COUNTER_VALUE = 10;

const CounterView = () => {
    const [counter, setCounter] = useState(0);

    const incrementCounter = () => {
        setCounter(currentValue => currentValue + 1);
    };

    if (counter > MAX_COUNTER_VALUE) {
        throw new Error(`Counter value cannot be greater than ${MAX_COUNTER_VALUE}`);
    }

    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={incrementCounter}>Increment</button>
        </>
    );
};
