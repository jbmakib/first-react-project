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
import img10 from "../images/shoe-1.png";
import img11 from "../images/shoe-2.png";
import img12 from "../images/shoe-3.png";

export default function Cards() {
    const products = [
        {
            id: 1,
            name: "Bag 01",
            img: img1,
            body: "Duis molestie egestas lacus nec placerat. Fusce a dapibus mauris, ut feugiat lacus. Sed vel libero dapibus, luctus ante eget, faucibus nulla. Quisque convallis dapibus nunc nec rhoncus. Etiam viverra nisl in ex feugiat, nec venenatis sem maximus. Vivamus sodales enim in pellentesque rutrum. In hac habitasse platea dictumst. Pellentesque.",
        },
        {
            id: 2,
            name: "Bag 02",
            img: img2,
            body: "Maecenas viverra, lacus nec fringilla vulputate, ex lorem convallis erat, id rhoncus dui ipsum sit amet elit. Suspendisse nec suscipit nisl, a malesuada eros. Nulla non scelerisque augue. Suspendisse augue dui, scelerisque at consectetur quis, rutrum et augue. Donec malesuada ligula et nunc pellentesque posuere. Cras at semper nunc. Orci.",
        },
        {
            id: 3,
            name: "Bag 03",
            img: img3,
            body: "Aliquam sagittis cursus ullamcorper. Curabitur pulvinar venenatis est vel congue. Donec accumsan gravida convallis. Aenean rutrum sem in sem luctus ultricies. In vestibulum tortor ipsum, id accumsan dui maximus nec. Integer porta a erat sit amet condimentum. Aliquam eget turpis sit amet enim hendrerit suscipit. Donec laoreet elit metus, non.",
        },
        {
            id: 4,
            name: "Jacket 01",
            img: img4,
            body: "Aliquam erat volutpat. Maecenas vel elementum neque. Nullam scelerisque turpis quis porttitor mollis. Donec in orci ante. Ut in orci in ex mattis varius vel vel turpis. Nunc ullamcorper arcu non ligula rutrum, nec pretium est mattis. Pellentesque facilisis sapien eu enim venenatis, nec iaculis velit congue. Nam sed aliquet",
        },
        {
            id: 5,
            name: "Jacket 02",
            img: img5,
            body: "Aliquam erat volutpat. Morbi malesuada semper condimentum. Proin porttitor porttitor nisl, sit amet interdum eros mollis eu. Mauris placerat, odio at lobortis lacinia, est diam suscipit eros, vel vulputate diam metus a elit. In hac habitasse platea dictumst. Mauris malesuada luctus elit quis bibendum. Donec lacinia ante enim, eu interdum.",
        },
        {
            id: 6,
            name: "Jacket 03",
            img: img6,
            body: "Aliquam erat volutpat. Morbi malesuada semper condimentum. Proin porttitor porttitor nisl, sit amet interdum eros mollis eu. Mauris placerat, odio at lobortis lacinia, est diam suscipit eros, vel vulputate diam metus a elit. In hac habitasse platea dictumst. Mauris malesuada luctus elit quis bibendum. Donec lacinia ante enim, eu interdum.",
        },
        {
            id: 7,
            name: "Jacket 04",
            img: img7,
            body: "Mauris risus enim, congue id metus quis, vehicula sagittis arcu. Nulla a risus ut arcu consequat lacinia in ut erat. Vestibulum id enim orci. Donec in dui non est lobortis convallis. Curabitur dignissim semper ex, a feugiat est convallis id. Quisque non molestie ligula. Etiam vel ullamcorper mi. Curabitur iaculis.",
        },
        {
            id: 8,
            name: "Jacket 05",
            img: img8,
            body: "Nam sit amet neque urna. In ultricies mauris dui, imperdiet vehicula sapien auctor sit amet. Morbi suscipit ante eget maximus euismod. Nullam maximus eu tortor at cursus. In non tincidunt ligula. Vivamus vestibulum nunc nunc, id eleifend neque aliquam quis. Sed quis magna sed neque consectetur dignissim pulvinar ac erat.",
        },
        {
            id: 9,
            name: "Jacket 06",
            img: img9,
            body: "Nam iaculis rutrum finibus. Aliquam ac lectus eget felis lacinia sagittis. Aenean id finibus mi. Pellentesque sed venenatis nibh. Mauris blandit neque sed laoreet vulputate. Donec sodales nec turpis sed condimentum. Duis pretium placerat nibh a commodo. Ut id neque sed massa imperdiet fermentum. Donec neque quam, commodo sed blandit.",
        },
        {
            id: 10,
            name: "Shoe 01",
            img: img10,
            body: "Morbi euismod mi nibh, non suscipit mauris blandit convallis. Duis pretium id diam in cursus. Donec id urna vestibulum, interdum orci vel, tincidunt mi. Integer semper mi nec leo faucibus maximus. Phasellus mattis augue quis diam cursus dignissim. Phasellus iaculis in dui quis fermentum. Ut iaculis eget lacus vitae condimentum.",
        },
        {
            id: 11,
            name: "Shoe 02",
            img: img11,
            body: "Proin vestibulum, orci vitae sodales mollis, dolor eros elementum ipsum, non mollis lectus nulla vitae sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis nisi felis, eleifend in pretium non, molestie et elit. Pellentesque sit amet purus sed ipsum ornare venenatis a eget nisl. In.",
        },
        {
            id: 12,
            name: "Shoe 03",
            img: img12,
            body: "Proin vestibulum, orci vitae sodales mollis, dolor eros elementum ipsum, non mollis lectus nulla vitae sem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis nisi felis, eleifend in pretium non, molestie et elit. Pellentesque sit amet purus sed ipsum ornare venenatis a eget nisl. In.",
        },
    ];
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
                <Card
                    key={product.id}
                    name={product.name}
                    img={product.img}
                    body={product.body}
                ></Card>
            ))}
        </div>
    );
}
