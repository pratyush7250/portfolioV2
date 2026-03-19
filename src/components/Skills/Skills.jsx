import React from "react";
import "./Skills.css";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <div id="skills" className="skill-section-container">
      <h2 className="title">Skills</h2>

      <div  className="skills-section">
        {SkillsInfo.map((category, index) => (
          <div key={index} className="skills-card">
            <h2 className="category-title">{category.title}</h2>

            <div className="skills-grid">
              {category.skills.map((skill, i) => (
                <div key={i} className="skill-pill">
                  <img src={skill.logo} alt={skill.name} />
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;