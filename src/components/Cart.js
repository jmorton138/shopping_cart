import React, { useEffect } from "react";
import { useState } from "react";
import CartSidebar from "./CartSidebar";
import ReactCSSTransitionGroup from "react-transition-group"; // ES6

const Cart = (props) => {
  const [displayCart, setDisplayCart] = useState(false);
  let cartRender;
  let visibility;

  const showCartToggle = (e) => {
    e.preventDefault();
    setDisplayCart(!displayCart);
  };

  const hideCartToggle = (e) => {
    e.preventDefault();
    setDisplayCart(!displayCart);
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
    visibility = "show";
  } else {
    visibility = "hide";
  }

  return (
    <div className="cart-container">
      <div onClick={(e) => showCartToggle(e)}>
        Cart({itemQuantityReducer()})
      </div>
      <div id="cart-display" className={visibility}>
        <CartSidebar
          cart={props.cart}
          hideCartToggle={hideCartToggle}
          deleteFromCart={props.deleteFromCart}
        />
      </div>
    </div>
  );
};

export default Cart;
