import React from 'react';
import { Link, withRouter } from 'react-router-dom';


export default function NavBar() {
  return (
    <header id="hello">
      {/* Your nav bar goes here */}
      {/* Your 'Web Developer' <p> tag goes here too */}
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
      <h1>Software Engineer</h1>
    </header>
  )
}