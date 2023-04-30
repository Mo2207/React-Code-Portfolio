
import React from 'react';
import '../footer/footer.css';
import { Container } from 'react-bootstrap';
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <Container className='footer'>
      <div className='footerContent'>

        <div className='icons'>
          <a href="https://github.com/Mo2207">
            <BsGithub />
          </a>
        </div>
        <div className='icons'>
          <a href="https://www.linkedin.com/in/gabriel-morris-a4b897211/">
            <BsLinkedin />
          </a>
        </div>

      </div>
    </Container>
  )
}

export default Footer;