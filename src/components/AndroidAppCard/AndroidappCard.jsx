import React from 'react'
import './AndroidappCard.css'
const AndroidappCard = ({ image, title }) => {
  return (
    <div
      className="popular-way-card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="popular-way-label">
        {title}
      </div>
    </div>
  );
}

export default AndroidappCard
