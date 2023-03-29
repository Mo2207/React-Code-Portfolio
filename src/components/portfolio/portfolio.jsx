
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
    deployedLink: "https://mo2207.github.io/Wikitube/",
    repoLink: "https://github.com/Mo2207/Wikitube"
  },
  {
    image: weatherDashboard,
    title: "Weather Dashboard",
    deployedLink: "https://mo2207.github.io/Weather-Dashboard/",
    repoLink: "https://github.com/Mo2207/Weather-Dashboard"
  },
  {
    image: ecommerce,
    title: "Ecommerce Backend",
    deployedLink: "https://youtu.be/5lFUb8SjfBE",
    repoLink: "https://github.com/Mo2207/E-Commerce-Back-End"
  },
  {
    image: noteTaker,
    title: "Note Taker",
    deployedLink: "https://notetaker-mo2207.herokuapp.com/",
    repoLink: "https://github.com/Mo2207/Note-Taker"
  },
  {
    image: passwordGenerator,
    title: "Password Generator",
    deployedLink: "https://mo2207.github.io/Javascript-Password-Generator/",
    repoLink: "https://github.com/Mo2207/Javascript-Password-Generator"
  },
  {
    image: codeQuiz,
    title: "Code Quiz",
    deployedLink: "https://mo2207.github.io/Code-Quiz/",
    repoLink: "https://github.com/Mo2207/Code-Quiz"
  },
];

const allProjects = projects.map((project, index) => (
  <div className='project'>
    <img src={project.image} alt="" />
    <div className='projectText'>{project.title}</div>
    <div className='links'>
      <a href={project.deployedLink}>Deployed App</a>
      <a href={project.repoLink}>Repository</a>
    </div>
  </div>
))

const Portfolio = () => {
  return (
    <div style={{
      overflow: "auto",
      height: "97vh"
    }}>

      <div className='projectsLayout'>
        {allProjects}
      </div>

    </div>
  )
}

export default Portfolio;