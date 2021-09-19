import React from "react";

export default function Post(props) {
    const { title, body } = props;
    return (
        <div className="col">
            <div className="card h-100">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{body}</p>
                </div>
            </div>
        </div>
    );
}
