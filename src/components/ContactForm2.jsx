import React from "react";
import '../CSS/ContactForm2.css';

export default class ContactForm2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="projects">
        <h2>Portfolio</h2>
        <div className="projects">
          <h3 data-aos='fade-in' className='mobile-title'>Quips on Chips</h3>
          <a data-aos='fade-right' className='project' target='_blank' href="http://quipsonchips.surge.sh/">
            <div className="overlay">
            </div>
            <img src="https://previews.123rf.com/images/niloo138/niloo1381503/niloo138150300006/38140413-potato-chips-and-snacks-on-shelves-in-a-supermarket.jpg" alt="urban suburbanite" />
            <h3>Quips on Chips</h3>
            <hr></hr>
            <p>Review and rank your favorite snacks!</p>
          </a>

          <h3 data-aos='fade-in' className='mobile-title'>Quips on Chips Skills</h3>
          <a data-aos='fade-left' className='project' target='_blank' href="http://quipsonchips.surge.sh/">
            <div className="overlay">
            </div>
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <h3>Quips on Chips Skills</h3>
            <hr></hr>
            <p>JavaScript, Ruby on Rails, Ruby</p>
          </a>

          <h3 data-aos='fade-in' className='mobile-title'>TravelSeeker</h3>
          <a data-aos='fade-right' className='project' target='_blank' href="http://travelseekers.surge.sh/">
            <div className="overlay">
            </div>
            <img src="https://images.unsplash.com/photo-1503221043305-f7498f8b7888" alt="Travelseeker" />
            <h3>TravelSeeker</h3>
            <hr></hr>
            <p>Find cheap places to stay and upload your pics</p>
          </a>

          <h3 data-aos='fade-in' className='mobile-title'>TravelSeeker Skills</h3>
          <a data-aos='fade-left' className='project' target='_blank' href="http://travelseekers.surge.sh/">
            <div className="overlay">
            </div>
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <h3>TravelSeeker Skills</h3>
            <hr></hr>
            <p>Express, React, JavaScript</p>
          </a>
          <h3 data-aos='fade-in' className='mobile-title'>Stock Wizard</h3>
          <a data-aos='fade-right' className='project' target='_blank' href="http://ianstockapplication.surge.sh/">
            <div className="overlay">
            </div>
            <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/38478585_1922339777809531_8134470769301258240_n.png?_nc_cat=111&_nc_oc=AQnsJ8ZtZ1Eb7aMsGAIH4SAGWCvORtz-iDX8TR2gJU_0mzvxUsOVBDNjIqlpIC7_d7Q&_nc_ht=scontent-lga3-1.xx&oh=c0014b35b26e9ef37e0d54202bf5875c&oe=5E302993" alt="shopping list" />
            <h3>Stock Wizard</h3>
            <hr></hr>
            <p>Use the Wizard for Stock Recommendations!</p>
          </a>
          <h3 data-aos='fade-in' className='mobile-title'>Stock Wizard Skills</h3>
          <a data-aos='fade-left' className='project' target='_blank' href="http://ianstockapplication.surge.sh/">
            <div className="overlay">
            </div>
            <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
            <h3>Stock Wizard Skills</h3>
            <hr></hr>
            <p>JavaScript, HTML, CSS</p>
          </a>

        </div>
        {/* <div className="parallax"></div> */}
      </div >
    )
  }

}