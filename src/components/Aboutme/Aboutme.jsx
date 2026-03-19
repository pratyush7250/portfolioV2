import React from 'react'
import './Aboutme.css'
import Timeline from '../Timeline/Timeline';

import { IoSchool } from "react-icons/io5";
import { FaSchool } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import { MdWork } from "react-icons/md";


import About from '../About/About';

const Aboutme = () => {

  // ✅ Skills Data
  const skills = [
    { name: "HTML & CSS", value: 95, color: "#22c55e" }, // green
    { name: "React JS", value: 90, color: "#3b82f6" },   // blue
    { name: "Angular", value: 92, color: "#ef4444" },    // red
    { name: "Node JS", value: 85, color: "#a855f7" },    // purple
  ];

  // ✅ Education Data
  const educationData = [
    {
      title: "Master’s Degree",
      time: "15/10/2025",
      desc: "Masters in computer science from Indira Gandhi Institute of Technology,Dhenkanal,Odisha.",
      icon: <FaUserGraduate />,
    },
    {
      title: "Bachelor’s Degree",
      time: "15/10/2021",
      desc: "Completed graduation from Balangir Degree College,Balasore,Odisha.",
      icon: <IoSchool />,
    },
    {
      title: "Higher Secondary Education",
      time: "15/10/2018",
      desc: "Completed Higher Secondary Education from Newtonian Institute of Science & Technology,Balasore,Odisha.",
      icon: <FaSchool />,
    },
  ];

  // ✅ Experience Data
  const experienceData = [
    {
      title: "Software Developer (Full-Time)",
      time: "15/10/2024 - Present",
      desc: "Working as a Software Developer at Intelliapplyd Technologies Pvt. Ltd., contributing to web application development and real-world projects.",
      icon: <MdWork />,
    },
    {
      title: "Software Developer Intern",
      time: "15/10/2021",
      desc: "Completed an internship at Intelliapplyd Technologies Pvt. Ltd., gaining hands-on experience in software development.",
      icon: <IoSchool />,
    },
  ];

  return (
    <div id='about-me' className="container">

      <About skills={skills} />

      <div id="education">
        <h2>Education</h2>
        <Timeline educationData={educationData} />

      </div>
      <div id="experience">
        <h2>Experience</h2>
        <Timeline educationData={experienceData} />
      </div>

    </div>
  );
}

export default Aboutme;