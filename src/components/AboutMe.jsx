import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default function AboutMe() {
  return (
    <div id="about-me">
      <h2>About Me</h2>
      <div id="skill-set">
        <div>

        </div>
        <h1>Programming Skills</h1>
        <div>
          <p>Javascript</p>
          <img src="https://cdn.svgporn.com/logos/javascript.svg" />
        </div>
        <p>HTML</p>
        <p>CSS</p>
        <p>React</p>
        <div>
          <p>Ruby</p>
          <img src="https://media.threatpost.com/wp-content/uploads/sites/103/2013/06/07044652/ruby.png" />
        </div>
        <p>Python</p>
        <p>Ruby on Rails</p>
        <p>Express</p>
        <p>SQL</p>
        <p>Django</p>
      </div>
    </div>
  )
}