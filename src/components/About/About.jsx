import React from 'react'
import './About.css'
import fullPhoto from '../../assets/fullPhoto.jpg'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const About = ({ skills }) => {
    return (
        <div  className='about'>
            <div className="about-sections">

                {/* LEFT IMAGE */}
                <div className="about-left">
                    <img src={fullPhoto} alt="profile" />
                </div>

                {/* RIGHT CONTENT */}
                <div className="about-right">
                    <h2>About Me</h2>
                   
                    <div className="about-para">
                        <p>I am an experienced Frontend Developer with over a decade of expertise in creating responsive and user-friendly web applications.My passion for frontend development is not only reflected in my code but also in my commitment to delivering exceptional user experiences.</p>
                    </div>

                    {/*  SKILLS */}
                    <div className="skills-progress-section">
                        <div className="skills-progress-container">
                            {skills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <CircularProgressbar
                                        value={skill.value}
                                        text={`${skill.value}%`}
                                        styles={buildStyles({
                                            pathColor: skill.color,   // ✅ dynamic color
                                            trailColor: "#f3f3f3",
                                            textColor: "#333",
                                            strokeLinecap: "round",
                                        })}
                                    />
                                    <span className="skill-name">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* ACHIEVEMENTS */}
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>1</h1>
                    <p>YEAR OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>CONNECTIONS</p>
                </div>
            </div>
        </div>
    )
}

export default About