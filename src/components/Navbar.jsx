import React from "react";
import Logo from "../assets/Logo.webp";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedin, setisLoggedin] = useState(false);
  return (
    <div className="nav">
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact Us</li>
        </Link>
        <Link to="">
          <li>Cart</li>
        </Link>
      </ul>
      {isLoggedin ? (
        <button onClick={() => setisLoggedin(false)}>Logout</button>
      ) : (
        <button onClick={() => setisLoggedin(true)}>Login</button>
      )}
    </div>
  );
};

export default Navbar;
