import React from "react";

const Contact = () => {
  return (
    <div id="contact-form" className="contact">
      <div className="contact-form">
        <h2>Kontakta oss</h2>
        <form action="https://formspree.io/f/mbjeqpyl" method="POST">
          <label htmlFor="fname">Namn</label>
          <input
            type="text"
            id="fname"
            name="Namn"
            placeholder="Ditt förnamn.."
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="Email"
            placeholder="Din email.."
          />

          <label htmlFor="message">Meddelande</label>
          <textarea
            id="message"
            name="Meddelande"
            placeholder="Vad kan vi hjälpa dig med?"
          ></textarea>

          <input type="submit" value="Skicka" />
        </form>
      </div>
      <div className="image">
        <img src="images/store.jpeg" alt="Bild på butik" />
      </div>
    </div>
  );
};

export default Contact;
