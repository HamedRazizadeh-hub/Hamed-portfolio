import { useState, type FormEvent, type ChangeEvent } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Email must include @";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    if (newErrors.name || newErrors.email || newErrors.message) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section id="contact">
      <h2>Get in Touch</h2>

      {submitted && <p>Thanks for reaching out! I'll get back to you soon.</p>}

      <form id="contact-form" className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name: *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email: *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message: *</label>
          <textarea
            id="message"
            name="message"
            rows={7}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p>{errors.message}</p>}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
