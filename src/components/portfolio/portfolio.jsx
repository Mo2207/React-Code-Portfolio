
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
    deployedLink: "",
    repoLink: ""
  },
  {
    image: ecommerce,
    title: "Ecommerce Backend",
    deployedLink: "",
    repoLink: ""
  },
  {
    image: noteTaker,
    title: "Note Taker",
    deployedLink: "",
    repoLink: ""
  },
  {
    image: passwordGenerator,
    title: "Password Generator",
    deployedLink: "",
    repoLink: ""
  },
  {
    image: codeQuiz,
    title: "Code Quiz",
    deployedLink: "",
    repoLink: ""
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