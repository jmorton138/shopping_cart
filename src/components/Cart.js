import React, { useEffect } from "react";
import { useState } from "react";

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
    cartRender = props.cart.map((item) => {
      return <div>{item.name}</div>;
    });
  } else {
    cartRender = null;
  }

  return (
    <div className="cart-container" onClick={(e) => showCartToggle(e)}>
      <div>Cart({props.cart.length})</div>
      <div className="cart-display">{cartRender}</div>
    </div>
  );
};

export default Cart;
