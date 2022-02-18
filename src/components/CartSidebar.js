import React from "react";

const CartSidebar = (props) => {
  let cartRender;
  if (props.cart.length === 0) {
    cartRender = <div>No items in Cart</div>;
  } else {
    cartRender = props.cart.map((item) => {
      return (
        <div>
          <div>Item: {item.name}</div>
          <div>Quantity: {item.quantity}</div>
          <button
            onClick={(e) => {
              props.deleteFromCart(e, item.id);
            }}
          >
            Remove Item
          </button>
        </div>
      );
    });
  }

  return (
    <div className="cart-display">
      <button onClick={(e) => props.hideCartToggle(e)}>X</button>
      {cartRender}
      <button>Checkout</button>
    </div>
  );
};

export default CartSidebar;
