
import React from 'react';
import './App.css';
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Experience from './components/experience/experience.jsx';

function App() {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>
      <main>
        <Experience/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
