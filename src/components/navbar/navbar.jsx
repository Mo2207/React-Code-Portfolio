
import React from 'react';
import '../navbar/navbar.css';

const Navbar = ({ toggle }) => {
  return (
    <div className="navbar">
      <div className="navLink">
        <button onClick={toggle}>About</button>
      </div>
      <div className="navLink">
        <button onClick={toggle}>Portfolio</button>
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