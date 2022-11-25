// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App(props) {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div data-testid="vitest"></div>
      <Navbar></Navbar>
    </div>
  );
}

export default App;
