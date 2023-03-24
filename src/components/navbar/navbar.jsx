
import React from 'react';
import '../navbar/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navLink">
        <a href="#">About Me</a>
      </div>
      <div className="navLink">
        <a href="https://www.linkedin.com/in/gabriel-morris-a4b897211/">LinkedIn</a>
      </div>
      <div className="navLink">
        <a href="https://github.com/Mo2207">Github</a>
      </div>
      <div className="navLink">
        <a href="#">My Resume</a>
      </div>
      <div className="navLink">
        <a href="#">Contact Me</a>
      </div>
    </div>
  );
}

export default Navbar;