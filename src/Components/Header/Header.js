import React from "react";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />

      <nav>
        <a href="/Shop">Shop</a>
        <a href="/Review">Order Preview</a>
        <a href="/Manage">Manage Inventory</a>
      </nav>
    </div>
  );
};

export default Header;
