import React from 'react'

export default function ContactForm() {
  return (

    <section id="contact">
      <div>
        <h2>Contact Information</h2>
      </div>
      <div id="white-space-contact"> 

      </div>
      <div id="contact-flex">
        <div>
          <h3>Phone Number: (347) 525 7084</h3>
          <h3>Email: ian.a.rappaport@gmail.com</h3>
        </div>

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
    </section>

  )
}