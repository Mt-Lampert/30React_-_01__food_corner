import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

function Home(props) {
  return (
    <div className="homepage" data-testid="home-container">
      <div className="home-header hero is-large" data-testid="home-hero">
        <div className="hero-body">
          <h1 className="title">Food Corner</h1>
          <h2 className="subtitle">Indian Food at a Click</h2>

          <Link to="/menus">
            <button className="button is-medium is-dark">Order Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
