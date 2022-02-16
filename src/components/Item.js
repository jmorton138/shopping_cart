import React, { useState, useEffect } from "react";
import { AddToCart } from "./AddToCart";

export const Item = (props) => {
  const [item, setItem] = useState(0);

  useEffect(() => {
    setItem({ name: "item1", price: "2" });
  }, []);

  return (
    <div className="item-container">
      <img className="item-img" alt="img" />
      <p className="item-desc">Item description</p>
      <AddToCart item={item} addToCart={props.addToCart} />
    </div>
  );
};
