import React from 'react'

export default function ContactForm() {
  return (

    <section className="contact">
      <h2>Contact</h2>

      <form>
        <input />
        <input id="name" placeholder="Name" />

        <input />
        <input id="email" placeholder="Email" />

        <textarea></textarea>
        <textarea placeholder="Message" />

        <input
          type="submit"
        />
        <input type="submit" />
      </form>
    </section>

  )
}