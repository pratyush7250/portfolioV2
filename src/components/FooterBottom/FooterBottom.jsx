import React from "react";
import "./FooterBottom.css";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

const FooterBottom = () => {
  return (
    <>
      <div className="footer-peach">

        {/* LEFT */}
        <div className="footer-left">
          <h3>Pratyush Mohanty</h3>
          <p>Frontend Developer | Angular | React</p>
          <p className="location">📍 India</p>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <p className="copyright">
            © {new Date().getFullYear()} Pratyush Mohanty. All rights reserved.
          </p>

          <p className="tagline">
            Built with ❤️ using React
          </p>

          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaArrowUp /> Back to Top
          </button>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <div className="socials">
            <a href="https://github.com/pratyush7250" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pratyush-mohanty-9b698b2a3/" target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:pratyushmohanty7250@email.com">
              <FaEnvelope />
            </a>
          </div>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-links">
            <a href="/resume.pdf" target="_blank">Resume</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;