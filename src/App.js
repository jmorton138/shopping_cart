import "./App.css";
import Shop from "./components/Shop";
import Navbar from "./components/Navbar";
import { RouteSwitch } from "./RouteSwitch";
import { useState } from "react";

function App() {
  return (
    <div>
      <RouteSwitch />
    </div>
  );
}

export default App;
