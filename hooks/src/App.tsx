import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuantityPicket from "./components/QuantityPicket/QuantityPicket";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QuantityPicket />
    </>
  );
}

export default App;
