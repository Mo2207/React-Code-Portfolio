
import React from 'react';
import '../portfolio/portfolio.css';
import wikitube from '../../assets/wikitube-app.png';
import EastCoastCamping from '../../assets/EastCoastCamping.png';
import weatherDashboard from '../../assets/weather-dashboard-app.png';
import ecommerce from '../../assets/Ecommerce-backend-app.png';
import passwordGenerator from '../../assets/password-generator-app.png';
import codeQuiz from '../../assets/code-quiz-app.png';
import employeeTracker from '../../assets/employeeTracker.png';
import { Container } from 'react-bootstrap';


const projects = [
  {
    image: EastCoastCamping,
    title: "EastCoastCamping",
    deployedLink: "https://east-coast-camping.herokuapp.com/",
    repoLink: "https://github.com/Mo2207/EastCoastCamping"
  },
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
    image: employeeTracker,
    title: "Employee Tracker",
    deployedLink: "https://www.youtube.com/watch?v=G8ySKoR8nV4&ab_channel=Mo1042",
    repoLink: "https://github.com/Mo2207/Employee-Tracker"
  },
  {
    image: ecommerce,
    title: "Ecommerce Backend",
    deployedLink: "https://youtu.be/5lFUb8SjfBE",
    repoLink: "https://github.com/Mo2207/E-Commerce-Back-End"
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
    <Container style={{
      overflow: "auto",
      height: "120%"
    }}>

      <div className='projectsLayout'>
        {allProjects}
      </div>

    </Container>
  )
}

export default Portfolio;