import React from 'react';
import IanRappaportResume from '../IanRappaportResume.pdf';

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state
    return (

      <section id="contact">
        <div>
          <h2>Contact Information</h2>
        </div>
        <div id="white-space-contact">

        </div>
        <div id="contact-flex">
          <div>
            <h2>Links</h2>
            <div id="white-space-contact">

            </div>
           
            <div id="white-space-contact">

            </div>

           
            <div id="contact-flex-links">


              {/* <a
              href={IanRappaportResume}
              target="_blank">
              Resume
            </a> */}
              <a
                href="tel:347-525-7084"
              >
                <img src="https://image.flaticon.com/icons/png/512/977/977411.png"/>
              </a>
              <a
                target="_blank"
                href="mailto:ian.a.rappaport@gmail.com">
                <img src="https://image.flaticon.com/icons/png/512/37/37572.png" />
              </a>

              <a
                target="_blank"
                href="https://github.com/iar001"
              >
                <img src="https://icon-library.net/images/github-icon-png/github-icon-png-29.jpg" />
              </a>

              <a
                target="_blank"
                href="https://www.linkedin.com/in/ian-rappaport-cfa-58312322/"
              >

                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" />
              </a>
            </div>
          </div>

          <div>
            <h2>Send Message</h2>
            <form
              onSubmit={this.submitForm}
              action="https://formspree.io/xyyzrjdy"
              method="POST"
            >
              <input
                id="name-input"
                placeholder="Your Name"
                type="name"
                name="name"
              />

              <input
                id="email-input"
                placeholder="Your Email"
                type="email"
                name="email"
              />

              <textarea
                id="message-input"
                placeholder="Message"
                type="text"
                name="message"
              />

              <input id="submit-button" type="submit" />
            </form>
          </div>
        </div>
      </section>

    )
  }
}