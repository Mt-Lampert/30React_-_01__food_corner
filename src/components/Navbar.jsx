import React, { useRef } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  const links = ["Menu", "Home", "Contact", "About"];
  const navbarMenu = useRef();
  
  function burgerHandler() {
    navbarMenu.current.classList.toggle("is-active")
  }

  return (
    <nav
      className="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <figure className="image is-48x48">
          <img src={logo} width="48" alt="The Logo" />
        </figure>https://filejoker.net/file/84qvi7ingu6h
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar-burger"
          onClick={burgerHandler}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div ref={navbarMenu} className="navbar-menu" >
        <div className="navbar-end">
          {links.map((link) => {
            return (
              <div className="navbar-item" key={link}>
                <Link to="#">{link}</Link>
              </div>
            );
          })}
          <a href="#/" className="navbar-item">
            {}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
