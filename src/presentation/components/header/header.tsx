import React from "react";
import './header.scss';
import Icon from '../../assets/images/logo.svg';

const Header: React.FC = () => {
    return <header>
        <div>
            <span>My balance</span>
            <span className="value">$921.48</span>
        </div>
        <img src={Icon} alt="icon" />
    </header>
}

export default Header;