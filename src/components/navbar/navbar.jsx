
import React from 'react';
import '../navbar/navbar.css';
import { Container, Row, Col, Image} from 'react-bootstrap';

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
        <button href="#">Resume</button>
      </div>
      <div className="navLink">
        <button onClick={props.toggleContact}>Contact</button>
      </div>
    </div>
    </Row>
  );
}

export default Navbar;