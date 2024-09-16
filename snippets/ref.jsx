import React, { useRef } from "react";

const App = () => {
    const counter = useRef(0);

    const incrementCounter = () => {
        counter.current++;
    };

    return (
        <>
            <p>Counter: {counter.current}</p>
            <button onClick={incrementCounter}>Increment</button>
        </>
    );
};
