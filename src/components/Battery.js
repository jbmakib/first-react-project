import React, { useState } from "react";

export default function Battery() {
    const [power, setPower] = useState(100);
    const changePower = (value) => {
        const newValue = power + value;
        if (newValue < 0 || newValue > 100) {
            return;
        }
        setPower(newValue);
    };
    return (
        <div className="text-center">
            <h2>Battery: {power}</h2>
            <button
                className="btn btn-dark me-1"
                onClick={() => changePower(-10)}
            >
                Battery Down
            </button>
            <button
                className="btn btn-outline-dark ms-1"
                onClick={() => changePower(+10)}
            >
                Battery Up
            </button>
        </div>
    );
}
