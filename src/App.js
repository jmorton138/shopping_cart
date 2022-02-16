import "./App.css";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import { RouteSwitch } from "./RouteSwitch";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (e, item) => {
    e.preventDefault();
    setCart([...cart, item]);
    console.log(cart);
  };
  return (
    <div>
      <RouteSwitch addToCart={addToCart} cart={cart} />
    </div>
  );
}

export default App;
