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
          <h2>My Projects</h2>
          <div className="projects">
            <a data-aos='fade-right' className='project' target='_blank' href="http://quipsonchips.surge.sh/">
              <div className="overlay">
              </div>
              <img src="https://previews.123rf.com/images/niloo138/niloo1381503/niloo138150300006/38140413-potato-chips-and-snacks-on-shelves-in-a-supermarket.jpg" alt="urban suburbanite" />
              <h3>Quips on Chips</h3>
              <hr></hr>
              <p>Quips on Chips</p>
            </a>
            <h3 data-aos='fade-in' className='mobile-title'>Urban Suburbanite</h3>
            <a data-aos='fade-left' className='project' target='_blank' href="http://travelseekers.surge.sh/">
              <div className="overlay">
              </div>
              <img src="https://images.unsplash.com/photo-1503221043305-f7498f8b7888" alt="Travelseeker" />
              <h3>TravelSeeker</h3>
              <hr></hr>
              <p>Travel</p>
            </a>
            <h3 data-aos='fade-in' className='mobile-title'>Deckbuilder</h3>
            <a data-aos='fade-right' className='project' target='_blank' href="http://ianstockapplication.surge.sh/">
              <div className='overlay'>
              </div>
              <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/38478585_1922339777809531_8134470769301258240_n.png?_nc_cat=111&_nc_oc=AQnsJ8ZtZ1Eb7aMsGAIH4SAGWCvORtz-iDX8TR2gJU_0mzvxUsOVBDNjIqlpIC7_d7Q&_nc_ht=scontent-lga3-1.xx&oh=c0014b35b26e9ef37e0d54202bf5875c&oe=5E302993" alt="sourc" />
              <h3>Stock Wizard</h3>
              <hr></hr>
              <p>Stock Wizard</p>
            </a>
            <h3 data-aos='fade-in' className='mobile-title'>Sourc</h3>
            <a data-aos='fade-left' className='project' target='_blank' href="http://shoppinglist928.surge.sh">
              <div className="overlay">
              </div>
              <img src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/38478585_1922339777809531_8134470769301258240_n.png?_nc_cat=111&_nc_oc=AQnsJ8ZtZ1Eb7aMsGAIH4SAGWCvORtz-iDX8TR2gJU_0mzvxUsOVBDNjIqlpIC7_d7Q&_nc_ht=scontent-lga3-1.xx&oh=c0014b35b26e9ef37e0d54202bf5875c&oe=5E302993" alt="shopping list" />
              <h3>Shopping List</h3>
              <hr></hr>
              <p>Plan, shop, and cook your week's meals</p>
            </a>
            <h3 data-aos='fade-in' className='mobile-title'>Shopping List</h3>
          </div>
          <div className="parallax"></div>
        </div >
      )
  }

}