// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menus from "./pages/Menus";
import Navbar from "./components/Navbar";
import "./main.scss";
import "./App.css";

function App(props) {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <div className="has-text-success" data-testid="vitest"></div>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menus" element={<Menus />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
