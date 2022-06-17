import React from "react";
import './header.scss';
import Icon from '../../assets/images/logo.svg';

const Header = props => {
    return <header>
        <div>
            <span>My balance</span>
            <span className="value">${props.myBalance}</span>
        </div>
        <img src={Icon} alt="icon" />
    </header>
}

export default Header;