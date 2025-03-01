import React from 'react'
import "./ExperienceCard.css"

const ExperienceCard = ({details}) => {
  return (
    <div className='work-experience-card'>
       <div className='experience-header'>
        
        <img src={details.image} alt="Company Logo" className="experience-image" />
        <h6>{details.title}</h6>
        </div>
        <div className='work-duration'>{details.date}</div>
        <ul>
        {details.responsibilities &&
                    details.responsibilities.map((item, index) => (
                        <li key={index}>{item}</li>

            ))}
        </ul>
    </div>
  );
};

export default ExperienceCard