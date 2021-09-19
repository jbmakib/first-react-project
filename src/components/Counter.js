import React, { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    const handleClick = (num) => {
        if (counter + num < 0) {
            return;
        }
        setCounter(counter + num);
    };

    return (
        <div className="text-center">
            <h3>Counter: {counter}</h3>
            <button
                className="btn btn-primary me-1"
                onClick={() => handleClick(1)}
            >
                Increase
            </button>
            <button
                className="btn btn-outline-primary ms-1"
                onClick={() => handleClick(-1)}
            >
                Decrease
            </button>
        </div>
    );
}
