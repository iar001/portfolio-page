import React from 'react';


export default function ContactForm2() {
  return (
    <div id="contact-form-2">
      <div>
          <h2>Send Message</h2>
          <form>
            <input id="name-input" placeholder="Name" />

            <input id="email-input" placeholder="Email" />

            <textarea id="message-input" placeholder="Message" />

            <input id="submit-button" type="submit" />
          </form>
        </div>
    </div>
  )

}