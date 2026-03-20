import React from "react";
import "./Hero.css";
import photo from '../../assets/photo.jpg'
import pdf from '../../assets/Resume.pdf'
import { MdOutlineFileDownload } from "react-icons/md";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        <img
          src={photo}
          alt="profile"
          className="profile-img"
        />

        <h1 className="hero-title">
          I'm <span className="highlight">Pratyush Mohanty</span>, frontend
          developer based in India.
        </h1>

        <p className="hero-desc">
          I am a frontend developer from Odisha, India with 1 year Experience
        </p>

        <div className="hero-buttons">
         <a href="#contact"><button className="btn-primary">Connect me</button></a>
            <a href={pdf} download="Pratyush-Mohanty-Resume.pdf">

          <button className="btn-outline">
            <MdOutlineFileDownload size={20} />
             Resume
          </button>
          </a>
        </div>

      </div>
    </section>
  );
}
