import React from "react";
import "./Webapp.css";
import mywork_data from '../../assets/mywork_data';

const Webapp = () => {
    return (
        <section id="web-apps" className="kili-wrapper">
            <div className="confidence">
                <h2>Web Apps</h2>

                <div className="mywork-container">
                    {mywork_data.map((work, index) => {
                        return (
                            <div key={index} className="work-card">
                                {/* Top Image Area with Hover Overlay */}
                                <div className="work-image-wrapper">
                                    <img src={work.w_img} alt={work.w_name} className="work-img" />
                                    <div className="work-overlay">
                                        <a
                                            href={work.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="work-view-btn"
                                        >
                                            View
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Bottom Tech Icons Footer */}
                                <div className="work-footer">
                                    <div className="tech-icons">
                                        {work.tech_icons && work.tech_icons.map((icon, iconIdx) => (
                                            <img 
                                                key={iconIdx} 
                                                src={icon} 
                                                alt="tech icon" 
                                                className="tech-icon-img" 
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button className="confidence-btn">FIND OUT MORE</button>
            </div>
        </section>
    );
};

export default Webapp;