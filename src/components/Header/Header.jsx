import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__inner">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/products/create">Create</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
