import React from 'react';
import logo from "../assets/logo.png"

function Navbar(props) {
  return ( 
    <div className='navbar'>
      <div className="leftSide" data-testid="left-side">
        <img src={logo} alt="The Logo" />
      </div>
      <div className="rightSide" data-testid="right-side">
        This is Navbar's right side
      </div>
    </div> 
  );
}

export default Navbar;