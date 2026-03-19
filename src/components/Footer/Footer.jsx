import React, { useState } from "react";
import "./Footer.css";
import FooterBottom from "../FooterBottom/FooterBottom";

const Footer = () => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          access_key: "2aa08bb2-e638-446f-ac7f-b156cc8f357b",
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: ""
        });
      } else {
        alert("Failed to send message.");
      }

    } catch (error) {
      alert("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        <div className="footer-links-wrapper">

          {/* ABOUT */}
          <div className="footer-col">
            <h4>About</h4>
            <ul>
              <li><a href="#about-me">About Me</a></li>
              <li><a href="#skills">My Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          {/* CONNECT */}
          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="mailto:pratyushmohanty7250@email.com">Email</a></li>
              <li><a href="https://www.linkedin.com/in/pratyush-mohanty-9b698b2a3/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="https://github.com/pratyush7250" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">Twitter</a></li>
              <li><a href="/resume.pdf" target="_blank" rel="noreferrer">Resume</a></li>
            </ul>
          </div>

        </div>

        {/* FORM SECTION */}
        <div className="footer-newsletter">
          <h4>Let’s Work Together 🚀</h4>
          <p>
            I’m open to freelance projects, internships, and full-time opportunities.
            Have something in mind? Let’s connect!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="name-row">
              <input
                type="text"
                placeholder="First Name *"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder="Last Name *"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <input
              type="email"
              placeholder="Email *"
              name="email"
              className="email-input"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* ✅ MESSAGE FIELD ADDED */}
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message *"
              className="email-input"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button
              type="submit"
              className="footer-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>

      <FooterBottom />
    </footer>
  );
};

export default Footer;