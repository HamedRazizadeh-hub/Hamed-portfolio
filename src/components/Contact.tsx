function Contact() {
  return (
    <section id="contact">
      <h2>Get in Touch</h2>

      <form id="contact-form" className="form">
        <div className="form-group">
          <label htmlFor="name">Name: *</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name:</label>
          <input type="text" id="last-name" name="last-name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: *</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message: *</label>
          <textarea id="message" name="message" rows={7} required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>

      <div id="form-message"></div>
    </section>
  );
}

export default Contact;
