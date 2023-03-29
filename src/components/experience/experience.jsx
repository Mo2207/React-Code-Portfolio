
import React from 'react';
import '../experience/experience.css';
import profilePicture from '../../assets/Gabe.picture.png';

const Experience = () => {
  // const experienceList = [
  //   'Javascript', 'Python', 'Html', 'Css', 'NodeJs', 'Express', 'MySQL', 'MongoDb', "API's", 'React', 'Graphql'
  // ]
  return (
    <div className='main'>
      
      <div className='introduction'>

        <div className='photo'>
          <img className='profilePicture' src={profilePicture} alt="" />
        </div>
      
        <div className='nameDescription'>
          <div className='myName'>
          Welcome to my portfolio page! My name is Gabe.
          </div>
          <div className='description'>
          I am a new coding developer. As someone who is passionate about technology and its potential to make the world a better place, I am excited to showcase my skills and projects to potential employers and collaborators. In this portfolio, you will find a collection of my work, including coding projects, websites, and applications that I have designed and built as part of school projects, or just work of my own. Whether you are a recruiter, hiring manager, or fellow developer, I hope you find my portfolio informative and inspiring. Thank you for taking the time to visit!
          </div>
        </div>
        
      </div>

      <div className='experience'>
        <h1>My Skills</h1>
          
        <div className='skillsList'>
          <ul>
            <li>Javascript</li>
            <li>Python</li>
            <li>Html</li>
            <li>Css</li>
            <li>NodeJs</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDb</li>
          </ul>
          <ul>
            <li>API's</li>
            <li>React</li>
            <li>Graphql</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default Experience;