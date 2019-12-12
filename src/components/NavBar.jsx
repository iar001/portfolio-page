import React from 'react';


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
          <p>Contact</p>
        </div>
      </nav>
      <h1>Junior Software Engineer</h1>
    </header>
  )
}