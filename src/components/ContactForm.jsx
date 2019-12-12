import React from 'react'

export default function ContactForm() {
  return (

    <section className="contact">
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