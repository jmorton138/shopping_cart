import "./App.css";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import { RouteSwitch } from "./RouteSwitch";
import { useState, useEffect } from "react";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    setCart(cart);
  }, [cart]);

  const addToCart = (e, item) => {
    e.preventDefault();
    //check if item exists if so update quantity
    if (cart.find((obj) => obj.id === item.id)) {
      const index = cart.findIndex((obj) => obj.id === item.id);
      const obj = cart[index];
      //bug here, adds exponentially
      let amount = obj.quantity + item.quantity;
      let tempArray = cart.slice();
      tempArray[index].quantity = amount;
      setCart([...tempArray]);
    } else {
      setCart([...cart, item]);
    }
  };

  const deleteFromCart = (e, id) => {
    e.preventDefault();
    const index = cart.findIndex((obj) => obj.id === id);
    let tempArray = cart;
    tempArray.splice(index, 1);
    setCart([...tempArray]);
  };
  return (
    <div>
      <RouteSwitch
        addToCart={addToCart}
        cart={cart}
        deleteFromCart={deleteFromCart}
      />
    </div>
  );
}

export default App;
