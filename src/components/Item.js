import React from "react";
import { AddToCart } from "./AddToCart";

export const Item = () => {
  return (
    <div className="item-container">
      <img className="item-img" />
      <p className="item-desc"></p>
      <AddToCart />
    </div>
  );
};
