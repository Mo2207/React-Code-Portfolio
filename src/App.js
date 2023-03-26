
import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Experience from './components/experience/experience.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Contact from './components/contact/contact.jsx';

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
    <div>
      <header>
        <Navbar 
        // hand the toggle functions to navbar as props
        toggleExperience={toggleExperience}
        togglePortfolio={togglePortfolio}
        toggleContact={toggleContact}
        />
      </header>

      <main>
        {/* logic to determine which component to render  */}
        {!showExperience && !showContact && <Portfolio />}
        {!showPortfolio && !showContact && <Experience />}
        {!showExperience && !showPortfolio && <Contact />}
      </main>

      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
}

export default App;