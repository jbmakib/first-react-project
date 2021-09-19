import React from "react";
import Counter from "./components/Counter";
import Gap from "./components/Gap";
import Battery from "./components/Battery";
import Products from "./components/Products";
import Posts from "./components/Posts";
import Title from "./components/Title";

function App() {
    return (
        <div className="container my-3">
            <Counter></Counter>
            <Gap></Gap>
            <Battery></Battery>
            <Gap></Gap>
            <Title title="Shopping Site"></Title>
            <Products></Products>
            <Gap></Gap>
            <Title title="Post from json placeholder"></Title>
            <Posts></Posts>
        </div>
    );
}

export default App;
