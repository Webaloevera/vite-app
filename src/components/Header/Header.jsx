import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
