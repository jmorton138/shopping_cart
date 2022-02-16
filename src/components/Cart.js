import React, { useEffect } from "react";
import { useState } from "react";

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  console.log(props);
  useEffect(() => {
    setCart(props.cart);
  }, []);

  return <div className="cart-container">Cart({props.cart.length})</div>;
};

export default Cart;
