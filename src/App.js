
import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Experience from './components/experience/experience.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';

function App() {

  const [showExperience, setShowExperience] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  // function to toggle the experience/portfolio components
  const toggleExperience = () => {
    if (showExperience) {
      return;
    } else {
      setShowExperience(true);
      setShowPortfolio(false);
    }
  };

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
        toggleExperience={toggleExperience}
        togglePortfolio={togglePortfolio}
        />
      </nav>
      <main>
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