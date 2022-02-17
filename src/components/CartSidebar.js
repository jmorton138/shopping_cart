import React from "react";

const CartSidebar = (props) => {
  let cartRender;
  if (props.cart.length === 0) {
    cartRender = <div>No items in Cart</div>;
  } else {
    cartRender = props.cart.map((item) => {
      return (
        <div>
          <div>{item.name}</div>
          <div>{item.quantity}</div>
        </div>
      );
    });
  }

  return (
    <div className="cart-display" onClick={(e) => props.showCartToggle(e)}>
      {cartRender}
    </div>
  );
};

export default CartSidebar;
