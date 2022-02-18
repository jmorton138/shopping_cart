import React from "react";

const CartSidebar = (props) => {
  let cartRender;
  if (props.cart.length === 0) {
    cartRender = <div>No items in Cart</div>;
  } else {
    cartRender = props.cart.map((item) => {
      return (
        <div className="checkout-item">
          <div className="checkout-item-image"></div>
          <div className="checkout-item-num">x{item.quantity}</div>

          <div className="checkout-item-name">{item.name}</div>
          <div className="checkout-item-price">${item.price}</div>

          <button
            className="checkout-delete"
            onClick={(e) => {
              props.deleteFromCart(e, item.id);
            }}
          >
            bin
          </button>
        </div>
      );
    });
  }

  return (
    <div>
      <button
        className="close-sidebar-btn"
        onClick={(e) => props.hideCartToggle(e)}
      >
        X
      </button>

      {cartRender}
      <button>Checkout</button>
    </div>
  );
};

export default CartSidebar;
