import React from "react";
import Posts from "./components/Posts";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="container my-3">
            <Counter></Counter>
            <Posts></Posts>
        </div>
    );
}

export default App;
