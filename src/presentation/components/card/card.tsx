import React from "react";
import "./card.scss";

const Card = props => {
    return <div className="card">
        <div className="content">{props.children}</div>
    </div>
}

export default Card;