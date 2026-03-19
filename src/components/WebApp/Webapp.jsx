import React from "react";
import "./Webapp.css";
import mywork_data from '../../assets/mywork_data'



const Webapp = () => {
    return (
        <section id="web-apps" className="kili-wrapper" >

            <div className="confidence">
                <h2>Web Apps</h2>

                <div className="mywork-container">
                    {mywork_data.map((work, index) => {
                        return (
                            <div key={index} className="work-item">
                                <img src={work.w_img} alt={work.w_name} />
                                <div className="work-overlay">
                                    <a
                                        href={work.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="work-view-btn"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <button className="confidence-btn">FIND OUT MORE</button>
            </div>


        </section>
    );
};

export default Webapp;
