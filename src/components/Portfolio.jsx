import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div id="portfolio">
      This is my Portfolio
      <div id="portfolio-links">

        <a
          target="_blank"
          href="http://quipsonchips.surge.sh/">
          Quips on Chips
      </a>
        <a
          target="_blank"
          href="http://travelseekers.surge.sh/">
          TravelSeeker
      </a>
      </div>

    </div>
  )
}