import React, { useEffect } from "react";
import { useState } from "react";
import CartSidebar from "./CartSidebar";

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  const [displayCart, setDisplayCart] = useState(false);
  let cartRender;

  useEffect(() => {
    setCart(props.cart);
  }, []);

  const showCartToggle = (e) => {
    e.preventDefault();
    setDisplayCart(!displayCart);
  };

  if (displayCart === true) {
    return (cartRender = (
      <CartSidebar cart={props.cart} showCartToggle={showCartToggle} />
    ));
  } else {
    cartRender = null;
  }

  return (
    <div className="cart-container" onClick={(e) => showCartToggle(e)}>
      <div>Cart({props.cart.length})</div>
      <div>{cartRender}</div>
    </div>
  );
};

export default Cart;
