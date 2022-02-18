import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const CartSidebar = (props) => {
  let cartRender;
  if (props.cart.length === 0) {
    cartRender = <div className="no-items">No items in Cart</div>;
  } else {
    cartRender = props.cart.map((item) => {
      return (
        <div className="checkout-item">
          <img className="checkout-item-image" src={item.imgUrl}></img>
          <div className="checkout-item-num">x{item.quantity}</div>

          <div className="checkout-item-name">{item.name}</div>
          <div className="checkout-item-price">${item.price}</div>

          <button
            className="checkout-delete"
            onClick={(e) => {
              props.deleteFromCart(e, item.id);
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
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
