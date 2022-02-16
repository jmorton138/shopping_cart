import React, { useState, useEffect } from "react";
import { AddToCart } from "./AddToCart";

export const Item = (props) => {
  const [item, setItem] = useState(0);

  useEffect(() => {
    setItem(props.info);
  }, []);

  const addQuantityToItem = (e) => {
    setItem({ ...item, quantity: e.target.value });
  };

  return (
    <div className="item-container">
      <img className="item-img" alt="img" />
      <h2>{item.name}</h2>
      <p className="item-desc">{item.description}</p>
      <input
        onChange={(e) => {
          addQuantityToItem(e);
        }}
        type="number"
        min="1"
        step="1"
        defaultValue="1"
      ></input>
      <AddToCart item={item} addToCart={props.addToCart} />
    </div>
  );
};
