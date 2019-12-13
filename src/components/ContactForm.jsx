import React from 'react'

export default function ContactForm() {
  return (

    <section id="contact">
      <h4>Contact me at 347-525-7084, ian.a.rappaport@gmail.com, or below!</h4>
      <h2>Contact</h2>

      <form>
        <input id="name" placeholder="Name" />

        <input id="email" placeholder="Email" />

        <textarea placeholder="Message" />

        <input type="submit" />
      </form>
    </section>

  )
}