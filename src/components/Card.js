import React from "react";

export default function Card(props) {
    const { title, img, body } = props;
    return (
        <div className="col">
            <div className="card h-100">
                {img ? (
                    <img src={img} alt={title} className="card-img-top" />
                ) : (
                    ""
                )}
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </div>
    );
}
