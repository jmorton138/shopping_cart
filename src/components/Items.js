import React from "react";
import { Item } from "./Item";

const Items = (props) => {
  const items = [
    {
      id: 0,
      name: "Cast Iron Pan",
      price: 29.99,
      quantity: 1,
      description: "Pretty ironic.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2019/05/26/05/01/cast-iron-4229579_1280.jpg",
    },
    {
      id: 1,
      name: "Wok",
      price: 7.99,
      quantity: 1,
      description: "Stir-fries will be a wok in the park.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2016/11/18/15/31/cooking-1835369_1280.jpg",
    },
    {
      id: 2,
      name: "Stock Pot",
      price: 34.99,
      quantity: 1,
      description: "Out of stock.",
      imgUrl:
        "https://images.pexels.com/photos/66639/pexels-photo-66639.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 3,
      name: 'Saucepan 10"',
      price: 10.99,
      quantity: 1,
      description: "Oh, so saucey.",
      imgUrl:
        "https://images.pexels.com/photos/5907629/pexels-photo-5907629.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 4,
      name: "Spatula",
      price: 2.99,
      quantity: 1,
      description: "Flippin' awesome.",
      imgUrl:
        "https://cdn.pixabay.com/photo/2015/09/09/21/35/omelet-933514__340.jpg",
    },
    {
      id: 5,
      name: "Ladle",
      price: 2.99,
      quantity: 1,
      description: "Souper good",
      imgUrl:
        "https://cdn.pixabay.com/photo/2014/12/21/18/56/pancake-575107__480.jpg",
    },
    {
      id: 6,
      name: "Sheetpan",
      price: 14.99,
      quantity: 1,
      description: "Very pan, very sheet",
      imgUrl:
        "https://images.pexels.com/photos/6852952/pexels-photo-6852952.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    },
    {
      id: 7,
      name: "Crockpot",
      price: 34.99,
      quantity: 1,
      description: "What a load of crock!",
      imgUrl:
        "https://cdn.pixabay.com/photo/2019/12/25/19/45/ham-4719155__340.jpg",
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
