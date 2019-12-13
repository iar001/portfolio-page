import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div id="portfolio">
      <h2>Portfolio</h2>
      <div id="portfolio-links">
        <div id="quips-on-chips">
          <div>
            <a
              target="_blank"
              href="http://quipsonchips.surge.sh/">
              Quips on Chips
            </a>
          </div>

          <img src="https://previews.123rf.com/images/niloo138/niloo1381503/niloo138150300006/38140413-potato-chips-and-snacks-on-shelves-in-a-supermarket.jpg" />
        </div>

        <div id="travelseeker">
          <div>
            <a
              target="_blank"
              href="http://travelseekers.surge.sh/">
              TravelSeeker
            </a>
          </div>

          <img src="https://images.unsplash.com/photo-1503221043305-f7498f8b7888" />
        </div>

        <div id="stocks">
          <div>
            <a
              target="_blank"
              href="http://ianstockapplication.surge.sh/">
              Stock Wizard
            </a>
          </div>

          <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/38478585_1922339777809531_8134470769301258240_n.png?_nc_cat=111&_nc_oc=AQnsJ8ZtZ1Eb7aMsGAIH4SAGWCvORtz-iDX8TR2gJU_0mzvxUsOVBDNjIqlpIC7_d7Q&_nc_ht=scontent-lga3-1.xx&oh=c0014b35b26e9ef37e0d54202bf5875c&oe=5E302993" />
        </div>

      </div>

    </div>
  )
}