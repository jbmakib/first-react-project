import React from "react";
import Card from "./Card";

export default function Cards(props) {
    const { datum } = props;
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {datum.map((data) => (
                <Card
                    key={data.id}
                    title={data.title}
                    img={data.img}
                    body={data.body}
                ></Card>
            ))}
        </div>
    );
}
