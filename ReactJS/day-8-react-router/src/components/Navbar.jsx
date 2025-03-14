import React from "react";
import { Link } from "react-router-dom";

import "../App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="list-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
