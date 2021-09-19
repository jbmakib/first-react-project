import React, { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return <Cards datum={posts}></Cards>;
}
