import React from "react";
import { AddToCart } from "./AddToCart";

export const Item = () => {
  return (
    <div className="item-container">
      <img className="item-img" alt="img" />
      <p className="item-desc">Item description</p>
      <AddToCart />
    </div>
  );
};
