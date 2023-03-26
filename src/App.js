
import React from 'react';
import { useState } from 'react';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Experience from './components/experience/experience.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';


export const handleExperienceClick = (showExperience, setShowExperience) => {
  setShowExperience(!showExperience);
}

export const handlePortfolioClick = (showPortfolio, setShowPortfolio) => {
  setShowPortfolio(!showPortfolio);
}

function App() {

  const [showExperience, setShowExperience] = useState(true);
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div>
      <nav>
        <Navbar 
        onExperienceClick={() => handleExperienceClick(showExperience, setShowExperience)}
        onPortfolioClick={() => handlePortfolioClick(showPortfolio, setShowPortfolio)}
        />
      </nav>
      <main>
        {!showPortfolio && <Experience />}
        {!showExperience && <Portfolio />}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;