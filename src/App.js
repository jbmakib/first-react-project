import React from "react";
import Counter from "./components/Counter";
import Cards from "./components/Cards";
import Posts from "./components/Posts";

function App() {
    return (
        <div className="container my-3">
            <Counter></Counter>
            <Cards></Cards>
            <Counter></Counter>
            <Posts></Posts>
        </div>
    );
}

export default App;
