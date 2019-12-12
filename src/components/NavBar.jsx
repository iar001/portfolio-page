import React from 'react';
import { Link, withRouter } from 'react-router-dom';


export default function NavBar() {
  return (
    <header>
      {/* Your nav bar goes here */}
      {/* Your 'Web Developer' <p> tag goes here too */}
      <nav>
        <p id='home' >Home</p>
        <div className='rightSide'>
          <p>About Me</p>
          <p>Portfolio</p>
          <Link to={'/contact'}>
            <p>Contact</p>
          </Link>
        </div>
      </nav>
      <h1>Software Engineer</h1>
    </header>
  )
}