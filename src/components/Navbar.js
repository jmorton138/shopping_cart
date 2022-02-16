import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 15px;
  color: white;
  font-size: 25px;
`;
const Navbar = () => {
  return (
    <div className="nav-container">
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/shop">Shop</StyledLink>
      </nav>
    </div>
  );
};

export default Navbar;
