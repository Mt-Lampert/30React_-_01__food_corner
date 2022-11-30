import React from "react";
import Chola from "../assets/chhola.jpg";
import "./MenuItem.scss";

function MenuItem(props) {
  return (
    <div className="mi-container card" data-testid="mi-container">
      <div className="card-image pt-5">
        <figure className="has-text-centered">
          <img src={props.image} width="300" alt={props.title + " image"}/>
        </figure>
      </div>
      <div className="card-content">
        <h1 className="mi-title is-size-4-desktop is-size-5-mobile has-text-weight-semibold mt-3">
          {props.title}
        </h1>
        <div className="mi-price has-text-weight-semibold has-text-right">
          {props.price} &euro;
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
