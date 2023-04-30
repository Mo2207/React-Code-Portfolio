
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Experience from './components/experience/experience.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Contact from './components/contact/contact.jsx';
import { Container, Row } from 'react-bootstrap';
import './App.css';

function App() {

  // useState for the toggle functions
  const [showExperience, setShowExperience] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [showContact, setShowContact] = useState(false);

  // function to toggle the Experience component
  const toggleExperience = () => {
    if (showExperience) {
      return;
    } else {
      setShowExperience(true);
      setShowPortfolio(false);
      setShowContact(false);
    }
  };

  // function to toggle the Portfolio component
  const togglePortfolio = () => {
    if (showPortfolio) {
      return;
    } else {
      setShowPortfolio(true);
      setShowExperience(false);
      setShowContact(false);
    }
  };

  // function to toggle the Contact component
  const toggleContact = () => {
    if (showContact) {
      return;
    } else {
      setShowContact(true);
      setShowPortfolio(false);
      setShowExperience(false);
    }
  };

  return (
    <Container fluid style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      padding: 0
    }}>
      <Row className='navRow' style={{
        flexGrow: 1,
        position: 'fixed',
        top: 0,
        width: '100%',
        margin: 0,
        padding: 0,
        zIndex: 999
      }}>
        <Navbar
          // hand the toggle functions to navbar as props
          toggleExperience={toggleExperience}
          togglePortfolio={togglePortfolio}
          toggleContact={toggleContact}
        />
      </Row>

      <Row className='experienceRow' style={{
        flexGrow: 1,
        marginTop: '70px',
      }}>
        {/* logic to determine which component to render  */}
        {!showExperience && !showContact && <Portfolio />}
        {!showPortfolio && !showContact && <Experience />}
        {!showExperience && !showPortfolio && <Contact />}
      </Row>

      <Row className='footerRow' style={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        margin: 0,
      }}>
        <Footer />
      </Row>

    </Container>
  );
}

export default App;