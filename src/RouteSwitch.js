import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
export const RouteSwitch = (props) => {
  return (
    <BrowserRouter>
      <Navbar cart={props.cart} deleteFromCart={props.deleteFromCart} />
      <Routes>
        <Route path="/shopping_cart" element={<Home />} />
        <Route
          path="/shopping_cart/shop"
          element={<Shop addToCart={props.addToCart} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
