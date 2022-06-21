import React from "react";
import './badge.scss';

interface Props {
    description: string
}

const Badge: React.FC<Props> = (props: Props) => {
    const { description } = props;
    return <div className="badge"><span className="content">{description}</span></div>
}

export default Badge;