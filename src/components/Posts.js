import React, { useEffect, useState } from "react";
import Post from "./Post";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {posts.map((post) => (
                <Post title={post.title} body={post.body} key={post.id}></Post>
            ))}
        </div>
    );
}
