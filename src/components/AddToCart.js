import React from "react";

export const AddToCart = () => {
  return (
    <div className="add-to-cart-container">
      <input type="number" min="0" step="1" defaultValue="1"></input>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};
