
import React from 'react';
import '../portfolio/portfolio.css';
import wikitube from '../../assets/wikitube-app.png';
import noteTaker from '../../assets/Note-taker-app.png';
import weatherDashboard from '../../assets/weather-dashboard-app.png';
import ecommerce from '../../assets/Ecommerce-backend-app.png';


const Portfolio = () => {
  return (
    <div>

      <div className='projectsLayout'>

        <div className='project'>
          <img src={wikitube} alt="" />
        </div>
        <div className='project'>
          <img src={weatherDashboard} alt="" />
        </div>
        <div className='project'>
          <img src={ecommerce} alt="" />
        </div>
        <div className='project'>
          <img src={noteTaker} alt="" />
        </div>

      </div>

    </div>
  )
}

export default Portfolio;