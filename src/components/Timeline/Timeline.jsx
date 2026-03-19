import React from "react";
import "./Timeline.css";



const Timeline = ({educationData}) => {
  return (
    <div className="timeline">
      {educationData.map((item, index) => (
        <div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="timeline-icon">{item.icon}</div>

          <div className="timeline-content">
            <h3>{item.title}</h3>
            <span>{item.time}</span>
            <p>{item.desc}</p>
            <a href="/">Read more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;