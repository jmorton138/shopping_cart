import React from "react";
import { Item } from "./Item";

const Items = (props) => {
  return <Item addToCart={props.addToCart} />;
};

export default Items;
