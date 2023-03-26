
import React from 'react';
import '../navbar/navbar.css';
import { handleExperienceClick } from '../../App';
import { handlePortfolioClick } from '../../App';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navLink">
        <button onClick={handleExperienceClick}>About</button>
      </div>
      <div className="navLink">
        <button onClick={handlePortfolioClick}>Portfolio</button>
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