
import React from 'react';
import '../portfolio/portfolio.css';
import wikitube from '../../assets/wikitube-app.png';
import noteTaker from '../../assets/Note-taker-app.png';
import weatherDashboard from '../../assets/weather-dashboard-app.png';
import ecommerce from '../../assets/Ecommerce-backend-app.png';
import passwordGenerator from '../../assets/password-generator-app.png';
import codeQuiz from '../../assets/code-quiz-app.png';

const projects = [
  {
    image: wikitube,
    title: "Wikitube API",
  },
  {
    image: weatherDashboard,
    title: "Weather Dashboard",
  },
  {
    image: ecommerce,
    title: "Ecommerce Backend",
  },
  {
    image: noteTaker,
    title: "Note Taker",
  },
  {
    image: passwordGenerator,
    title: "Password Generator",
  },
  {
    image: codeQuiz,
    title: "Code Quiz",
  },
];

const allProjects = projects.map((project, index) => (
  <div className='project'>
    <img src={project.image} alt="" />
    <div className='projectText'>{project.title}</div>
  </div>
))

const Portfolio = () => {
  return (
    <div>

      <div className='projectsLayout'>
        {allProjects}
      </div>

    </div>
  )
}

export default Portfolio;