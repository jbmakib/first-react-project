import React from "react";

export default function Card(props) {
    const { name, img, body } = props;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} alt={name} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </div>
    );
}
