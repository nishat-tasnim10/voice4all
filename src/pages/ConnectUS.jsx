
import { useState } from "react";
import "./ConnectUs.css";

export default function ConnectUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting Voice4All!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="connect-page">

      {/* HERO */}
      <section className="connect-hero">
        <span>GET IN TOUCH</span>

        <h1>
          Let's <strong>connect.</strong>
        </h1>

        <p>
          Have a question, need help, or want to share feedback?
          We're here to listen.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="connect-content">

        {/* LEFT SIDE */}
        <div className="connect-info">

          <span className="connect-label">
            CONTACT VOICE4ALL
          </span>

          <h2>
            Your voice
            <br />
            matters.
          </h2>

          <p>
            Whether you need help with a complaint or want to
            tell us about your experience, feel free to reach out.
            Our team is here to help.
          </p>

          {/* CONTACT DETAILS */}
          <div className="contact-details">

            <div className="contact-detail">
              <div className="contact-icon">📧</div>

              <div>
                <small>Email</small>
                <strong>support@voice4all.com</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">☎</div>

              <div>
                <small>Phone</small>
                <strong>+880 1XXX-XXXXXX</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">📍</div>

              <div>
                <small>Location</small>
                <strong>Dhaka, Bangladesh</strong>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">🕒</div>

              <div>
                <small>Support Hours</small>
                <strong>Available 24/7</strong>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <form
          className="connect-form"
          onSubmit={handleSubmit}
        >
          <h3>Send us a message</h3>

          {/* NAME + EMAIL */}
          <div className="form-row">

            <div className="connect-input">
              <label>Your Name</label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="connect-input">
              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

          </div>

          {/* SUBJECT */}
          <div className="connect-input">
            <label>Subject</label>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="What can we help you with?"
              required
            />
          </div>

          {/* MESSAGE */}
          <div className="connect-input">
            <label>Message</label>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="6"
              required
            />
          </div>

          <button type="submit">
            Send Message →
          </button>
        </form>

      </section>
    </div>
  );
}