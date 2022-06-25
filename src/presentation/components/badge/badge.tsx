import React from "react";
import './badge.scss';

interface Props {
    description: string,
    show: boolean
}

const Badge: React.FC<Props> = (props: Props) => {
    const { description } = props;
    return props.show && <div className="badge"><span className="content">{description}</span></div>
}

export default Badge;