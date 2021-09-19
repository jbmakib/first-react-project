import React from "react";
import Card from "./Card";
import img1 from "../images/bag-1.png";
import img2 from "../images/bag-2.png";
import img3 from "../images/bag-3.png";
import img4 from "../images/jacket-1.png";
import img5 from "../images/jacket-2.png";
import img6 from "../images/jacket-3.png";
import img7 from "../images/jacket-4.png";
import img8 from "../images/jacket-5.png";
import img9 from "../images/jacket-6.png";

export default function Cards() {
    const products = [
        { id: 1, name: "Bag 01", img: img1 },
        { id: 2, name: "Bag 02", img: img2 },
        { id: 3, name: "Bag 03", img: img3 },
        { id: 4, name: "Jacket 01", img: img4 },
        { id: 5, name: "Jacket 02", img: img5 },
        { id: 6, name: "Jacket 03", img: img6 },
        { id: 7, name: "Jacket 04", img: img7 },
        { id: 8, name: "Jacket 05", img: img8 },
        { id: 9, name: "Jacket 06", img: img9 },
    ];
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
                <Card
                    key={product.id}
                    name={product.name}
                    img={product.img}
                ></Card>
            ))}
        </div>
    );
}
