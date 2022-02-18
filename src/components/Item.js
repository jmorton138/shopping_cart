import React, { useState, useEffect } from "react";
import { AddToCart } from "./AddToCart";

export const Item = (props) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(props.info);
  }, []);

  const addQuantityToItem = (e) => {
    const value = parseInt(e.target.value);
    setItem({ ...item, quantity: value });
    console.log(item);
  };

  const handleAdd = (e) => {
    setItem({ ...item, quantity: 1 });
  };

  return (
    <div className="item-container">
      <img className="item-img " alt="img" />
      <div className="item-info">
        <h2 className="item-attr item-name">{item.name}</h2>
        <p className="item-desc item-attr">{item.description}</p>
        <input
          className="
      item-num-input item-attr"
          onChange={(e) => {
            addQuantityToItem(e);
          }}
          type="number"
          min="1"
          step="1"
          value={item.quantity ? item.quantity : 1}
        ></input>
        <div
          onClick={(e) => {
            handleAdd(e);
          }}
        >
          <AddToCart item={item} addToCart={props.addToCart} />
        </div>
      </div>
    </div>
  );
};
