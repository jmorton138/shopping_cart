import React from "react";
import Items from "./Items";

export const Shop = (props) => {
  return (
    <div>
      <Items addToCart={props.addToCart} />
    </div>
  );
};

export default Shop;
