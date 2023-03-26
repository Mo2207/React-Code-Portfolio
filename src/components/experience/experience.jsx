
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
            Hi, I'm Gabe.
          </div>
          <div className='description'>
            Welcome to my portfolio.
            Take a look around 
          </div>
        </div>
        
      </div>

      <div className='experience'>
        <h1>Skills</h1>
          
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