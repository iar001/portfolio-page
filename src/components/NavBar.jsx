import React from 'react';
import { Link, withRouter } from 'react-router-dom';


export default function NavBar() {
  return (
    <header id="hello">

      <nav>
        <a href="#hello">
          <p id="home">Home</p>
        </a>
        <div className='rightSide'>
          <a href="#about-me">
            <p>About Me</p>
          </a>
          <a href="#portfolio">
            <p>Portfolio</p>
          </a>
          <a href="#contact">
            <p>Contact</p>
          </a>
        </div>
      </nav>

      <div class="body-main-page">
        <div id="body-main-page-left">
          <h2>Ian Rappaport</h2>
          <img src="https://media.licdn.com/dms/image/C4D03AQHV-yPHCokJIQ/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=dn96tnPzXXjroBPHbO8iRrcZDSlBkRj2FpAWORvaOvk" />
        </div>
        <div id="body-main-page-right">
          <h2>Software Engineer</h2>
          <p>I am a fullstack software engineer with a background in finance. I have a unique skill set that combines computer programming with
            financial analysis to tackle complex problems with simple solutions. I am a resourceful and loyal person who is always looking to
            contribute to my team and those close around me.</p>
          <div>
            <div id="white-space">

            </div>
            <h2>Programming Skills</h2>
            <div id="skills">
              <div>
                <p>Javascript</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>Ruby</p>
                <p>Pyton</p>
              </div>
              <div>
                <p>React</p>
                <p>Ruby on Rails</p>
                <p>Express</p>
                <p>SQL</p>
                <p>Django</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </header>
  )
}