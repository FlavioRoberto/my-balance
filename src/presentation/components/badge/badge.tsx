import React from "react";
import './badge.scss';

const Badge = props => {
    const { description } = props;
    return <div className="badge"><span className="content">{description}</span></div>
}

export default Badge;