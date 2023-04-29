
import React from 'react';
import '../experience/experience.css';
import profilePicture from '../../assets/Gabe.picture.png';
import { Container, Row, Col, Image} from 'react-bootstrap';

const Experience = () => {
  return (
    <Container className='main'>
      
      <Row>
      <div className='introduction'>

        <Col md={4}>
          <Image className='profilePicture rounded-circle' src={profilePicture} alt="" />
        </Col>
      
      <Col md={8}>
        <div className='nameDescription'>
          <div className='myName  text-wrap'>
          Welcome to my portfolio page! My name is Gabe.
          </div>
          <div className='description text-wrap'>
          As a new coding developer, I am passionate about using technology to make the world a better place. This portfolio showcases my coding projects, websites, and applications, which I designed and built as part of school projects or personal work. Whether you are a recruiter, hiring manager, or fellow developer, I hope you find my work informative and inspiring. Thank you for visiting!
          </div>
        </div>
        </Col>
      </div>
      
      </Row>

      <div className='experience'>
        <h1>My Skills</h1>
          

        <div className='skillsList'>
        <Row>
          <Col md={6}>
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
          </Col>
          <Col md={6}>
          <ul>
            <li>API's</li>
            <li>React</li>
            <li>Graphql</li>
            <li>MySQL</li>
          </ul>
          </Col>
          </Row>
        </div>
      </div>

    </Container>
  )
}

export default Experience;