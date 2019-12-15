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
            <h2>Contact Info</h2>
            <div id="white-space-contact">

            </div>
            <h3>Phone Number</h3>
            <h3> (347) 525 7084</h3>
            <div id="white-space-contact">

            </div>
            <h3>Email </h3>
            <h3>ian.a.rappaport@gmail.com</h3>
            <div id="white-space-contact">

            </div>
            <a
              href={IanRappaportResume}
              target="_blank">
              Resume
            </a>
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
                placeholder="Name"
                type="name"
                name="name"
              />

              <input
                id="email-input"
                placeholder="Email"
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