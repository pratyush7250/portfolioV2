import React from 'react'
import './Service.css'
import Services_Data from '../../assets/services_data'

const Service = () => {
  return (
    <div className="services" id='services'>
      <h2>My Services</h2>

        <div className="services-container">
          {Services_Data.map((service, index) => {
            return <div key={index} className='services-format'>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>

            </div>
          })}
        </div>

     <a href="#contact"><button className="view-all-btn">CONTACT ME</button></a>

    </div>
  )
}

export default Service
