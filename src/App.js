
import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Experience from './components/experience/experience.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';

function App() {

  // useState for the toggle functions
  const [showExperience, setShowExperience] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // function to toggle the Experience component
  const toggleExperience = () => {
    if (showExperience) {
      return;
    } else {
      setShowExperience(true);
      setShowPortfolio(false);
    }
  };

  // function to toggle the Portfolio component
  const togglePortfolio = () => {
    if (showPortfolio) {
      return;
    } else {
      setShowPortfolio(true);
      setShowExperience(false);
    }
  };

  return (
    <div>
      <nav>
        <Navbar 
        // hand the toggle functions to navbar as props
        toggleExperience={toggleExperience}
        togglePortfolio={togglePortfolio}
        />
      </nav>
      <main>
        {/* logic to determine which component to render  */}
        {!showExperience && <Portfolio />}
        {!showPortfolio && <Experience />}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;