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

          
          <h3 data-aos='fade-in' className='mobile-title'>Stock Wizard</h3>
          <a data-aos='fade-right' className='project' target='_blank' href="http://ianstockapplication.surge.sh/">
            <div className="overlay">
            </div>
            <img src="data:image/jpeg;base64,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" alt="shopping list" />
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