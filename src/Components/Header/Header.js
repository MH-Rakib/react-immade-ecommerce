import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import logo from "../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
  const [logedInUser, setLogedInUser] = useContext(UserContext);
  return (
    <div className="header">
      <img src={logo} alt="" />

      <nav>
        <Link to="/Shop">Shop</Link>
        <Link to="/Review">Order Preview</Link>
        <Link to="/Manage">Manage Inventory</Link>
        {logedInUser.email ? (
          <button onClick={() => setLogedInUser({})}>Sign Out</button>
        ) : (
          <Link to="/Login">
            <button>Sign Up</button>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
