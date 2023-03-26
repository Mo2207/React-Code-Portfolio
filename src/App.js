
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
  const toggle = () => {
    if (showExperience) {
      setShowExperience(false);
      setShowPortfolio(true);
    } else {
      setShowPortfolio(false);
      setShowExperience(true);
    }
  };

  return (
    <div>
      <nav>
        <Navbar 
        toggle={toggle}
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