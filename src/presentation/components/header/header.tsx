import React from "react";
import './header.scss';
import Icon from '../../assets/images/logo.svg';

interface Props {
    myBalance: number
}

const Header: React.FC<Props> = props => {
    return <header>
        <div>
            <span>My balance</span>
            <span className="value">${props.myBalance}</span>
        </div>
        <img src={Icon} alt="icon" />
    </header>
}

export default Header;