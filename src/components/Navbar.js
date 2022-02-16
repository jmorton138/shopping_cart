import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </nav>
    </div>
  );
};

export default Navbar;
