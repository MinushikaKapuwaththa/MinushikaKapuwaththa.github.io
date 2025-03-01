import React from 'react'
import './ContactInfo.css'

const ContactInfoCard = ({icon,text}) => {
  return (
    <div className='contact-details-card'>
      <div className='icon'>{icon}</div>
      <p>
        {text.startsWith('http') ? (
          <a href={text} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        ) : (
          text
        )}
      </p>
    </div>
   
  )
}

export default ContactInfoCard