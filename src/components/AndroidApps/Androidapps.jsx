import React from 'react'
import './Androidapps.css'
import AndroidappCard from '../AndroidAppCard/AndroidappCard';
import { wayData } from "../../assets/assets";

const Androidapps = () => {
    return (
        <div id="android-apps" className="popular-way-container">
            <h2>Mobile Apps</h2>

            <div className="popular-way-grid">
                {wayData.map((item, index) => (
                    <AndroidappCard
                        key={index}
                        title={item.title}
                        image={item.image}
                    />
                ))}
            </div>

            <button className="view-all-btn">CONTACT ME</button>

        </div>
    )
}

export default Androidapps
