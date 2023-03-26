
import React from 'react';
import '../navbar/navbar.css';

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="navLink">
        <button onClick={props.toggleExperience}>About</button>
      </div>
      <div className="navLink">
        <button onClick={props.togglePortfolio}>Portfolio</button>
      </div>
      <div className="navLink">
        <button href="#">Resume</button>
      </div>
      <div className="navLink">
        <button href="#">Contact</button>
      </div>
    </div>
  );
}

export default Navbar;