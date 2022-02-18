import React, { useEffect } from "react";
import { useState } from "react";
import CartSidebar from "./CartSidebar";
import ReactCSSTransitionGroup from "react-transition-group"; // ES6

const Cart = (props) => {
  const [displayCart, setDisplayCart] = useState(false);
  let cartRender;

  const showCartToggle = (e) => {
    e.preventDefault();
    setDisplayCart(true);
  };

  const hideCartToggle = (e) => {
    e.preventDefault();
    setDisplayCart(false);
  };

  const itemQuantityReducer = () => {
    const array = props.cart.map((item) => {
      return item.quantity;
    });
    const initialValue = 0;
    const sum = array.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
    return sum;
  };

  if (displayCart === true) {
    return (cartRender = (
      <CartSidebar
        cart={props.cart}
        hideCartToggle={hideCartToggle}
        deleteFromCart={props.deleteFromCart}
      />
    ));
  } else {
    cartRender = null;
  }

  return (
    <div className="cart-container" onClick={(e) => showCartToggle(e)}>
      <div>Cart({itemQuantityReducer()})</div>
      <div>{cartRender}</div>
    </div>
  );
};

export default Cart;
