import React from "react";
import { Item } from "./Item";

const Items = (props) => {
  const items = [
    { name: "item0", price: 25, quantity: 0, description: "description0" },
    { name: "item1", price: 25, quantity: 0, description: "description1" },
    { name: "item2", price: 25, quantity: 0, description: "description2" },
    { name: "item3", price: 25, quantity: 0, description: "description3" },
    { name: "item4", price: 25, quantity: 0, description: "description4" },
    { name: "item5", price: 25, quantity: 0, description: "description5" },
    { name: "item6", price: 25, quantity: 0, description: "description6" },
    { name: "item7", price: 25, quantity: 0, description: "description7" },
  ];

  return items.map((item) => {
    return <Item addToCart={props.addToCart} info={item} />;
  });
};

export default Items;
