import React from "react";

export default function Title(props) {
    const { title } = props;
    return (
        <div>
            <h1 className="text-center">{title}</h1>
        </div>
    );
}
