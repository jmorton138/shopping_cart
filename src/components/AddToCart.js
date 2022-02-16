import React, { useEffect, useState } from "react";

export const AddToCart = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(props.item);
  }, []);

  return (
    <div className="add-to-cart-container">
      <button
        className="add-to-cart-btn"
        onClick={(e) => {
          props.addToCart(e, props.item);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
