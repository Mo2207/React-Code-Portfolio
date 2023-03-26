
import React from 'react';
import '../footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fagithub } from '@fortawesome/free-solid-svg-icons'
// import { brands } from '@fortawesome/fontawesome-svg-core/import.macro'
// import { library } from '@fortawesome/fontawesome-svg-core';
// library.add(fagithub)

const Footer = () => {
  return (
    <div className='footer'>

        <div className='icons'>
        {/* <FontAwesomeIcon icon={brands('fa-github')} style={{color: "#6282b0",}} /> */}
        {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
        <a href="https://github.com/Mo2207">Github</a>
        </div>
        <div className='icons'>
          <a href="https://www.linkedin.com/in/gabriel-morris-a4b897211/">LinkedIn</a>
        </div>

    </div>
  )
}

export default Footer;