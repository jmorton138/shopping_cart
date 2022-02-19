import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const CartSidebar = (props) => {
  let cartRender;
  let noItems;
  let subtotal = 0;
  let checkout;
  if (props.cart.length === 0) {
    noItems = "No items in cart";
  } else {
    cartRender = props.cart.map((item) => {
      let orderCost = item.price * item.quantity;
      subtotal = subtotal + orderCost;
      return (
        <div className="checkout-item">
          <img className="checkout-item-image" src={item.imgUrl}></img>
          <div className="checkout-item-num">x{item.quantity}</div>

          <div className="checkout-item-name">{item.name}</div>
          <div className="checkout-item-price">${item.price}</div>

          <div
            className="checkout-delete"
            onClick={(e) => {
              props.deleteFromCart(e, item.id);
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </div>
        </div>
      );
    });
    checkout = (
      <div className="checkout-btn-wrap">
        <div className="subtotal">Subtotal: ${subtotal}</div>
        <button className="checkout-btn">Checkout</button>
      </div>
    );
  }

  return (
    <div>
      <div
        className="close-sidebar-btn"
        onClick={(e) => props.hideCartToggle(e)}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </div>
      <div className="no-items">{noItems}</div>
      <div>{cartRender}</div>
      <div>{checkout}</div>
    </div>
  );
};

export default CartSidebar;
