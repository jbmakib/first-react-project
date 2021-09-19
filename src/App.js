import React from "react";
import Counter from "./components/Counter";
import Cards from "./components/Cards";
import Posts from "./components/Posts";
import Gap from "./components/Gap";
import Title from "./components/Title";
import Battery from "./components/Battery";

function App() {
    return (
        <div className="container my-3">
            <Counter></Counter>
            <Gap></Gap>
            <Battery></Battery>
            <Gap></Gap>
            <Title title="Shopping Site"></Title>
            <Cards></Cards>
            <Gap></Gap>
            <Title title="Post from json placeholder"></Title>
            <Posts></Posts>
        </div>
    );
}

export default App;
