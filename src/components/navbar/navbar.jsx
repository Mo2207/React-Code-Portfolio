
import React from 'react';
import '../navbar/navbar.css';
import { Row } from 'react-bootstrap';

const openResume = () => {
  window.open(process.env.PUBLIC_URL + '/Resume2023TECHIMPACT.pdf', '_blank');
};

const Navbar = (props) => {
  return (
    <Row style={{
      margin: 0,
      padding: 0
    }}>
      <div className="navbar">
        <div className="navLink">
          <button onClick={props.toggleExperience}>About</button>
        </div>
        <div className="navLink">
          <button onClick={props.togglePortfolio}>Portfolio</button>
        </div>
        <div className="navLink">
          <button onClick={openResume} rel="noopener noreferrer">Resume</button>
        </div>
        <div className="navLink">
          <button onClick={props.toggleContact}>Contact</button>
        </div>
      </div>
    </Row>
  );
}

export default Navbar;