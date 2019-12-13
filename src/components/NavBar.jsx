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
          <p>I am a structured products trader turned software engineer with a passion for solving problems</p>
        </div>
      </div>

    </header>
  )
}