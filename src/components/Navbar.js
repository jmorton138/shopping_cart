import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Cart";

const StyledLink = styled(Link)`
  text-decoration: none;
  padding: 15px;
  color: white;
  font-size: 25px;
`;
const Navbar = (props) => {
  return (
    <div className="nav-container">
      <nav>
        <StyledLink to="/shopping_cart">Home</StyledLink>
        <StyledLink to="/shopping_cart/shop">Shop</StyledLink>
        <Cart cart={props.cart} deleteFromCart={props.deleteFromCart} />
      </nav>
    </div>
  );
};

export default Navbar;
