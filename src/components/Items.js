import React from "react";
import { Item } from "./Item";

const Items = (props) => {
  const items = [
    {
      id: 0,
      name: "item0",
      price: 25,
      quantity: 1,
      description: "description0",
    },
    {
      id: 1,
      name: "item1",
      price: 25,
      quantity: 1,
      description: "description1",
    },
    {
      id: 2,
      name: "item2",
      price: 25,
      quantity: 1,
      description: "description2",
    },
    {
      id: 3,
      name: "item3",
      price: 25,
      quantity: 1,
      description: "description3",
    },
    {
      id: 4,
      name: "item4",
      price: 25,
      quantity: 1,
      description: "description4",
    },
    {
      id: 5,
      name: "item5",
      price: 25,
      quantity: 1,
      description: "description5",
    },
    {
      id: 6,
      name: "item6",
      price: 25,
      quantity: 1,
      description: "description6",
    },
    {
      id: 7,
      name: "item7",
      price: 25,
      quantity: 1,
      description: "description7",
    },
  ];

  // return items.map((item) => {
  //   return <Item addToCart={props.addToCart} info={item} />;
  // });

  return (
    <div className="items">
      {items.map((item) => {
        return <Item addToCart={props.addToCart} info={item} />;
      })}
    </div>
  );
};

export default Items;
