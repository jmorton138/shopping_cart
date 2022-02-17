import "./App.css";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import { RouteSwitch } from "./RouteSwitch";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (e, item) => {
    e.preventDefault();
    //check if item exists if so update quantity
    if (cart.find((obj) => obj.id === item.id)) {
      const index = cart.findIndex((obj) => obj.id === item.id);
      const obj = cart[index];
      let amount = obj.quantity + item.quantity;
      let tempArray = cart.slice();
      tempArray[index].quantity = amount;
      setCart(tempArray);
    } else {
      setCart([...cart, item]);
    }
  };

  const deleteFromCart = (e, id) => {};
  const reduceQuantityFromCart = (e, id) => {};
  return (
    <div>
      <RouteSwitch addToCart={addToCart} cart={cart} />
    </div>
  );
}

export default App;
