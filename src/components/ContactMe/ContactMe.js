import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ContactForm from '../ContactForm/ContactForm';

function ContactMe() {
  return (
    <section className='contact-container'>
        <h5>Conatact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <ContactInfoCard
                 icon={<EmailIcon fontSize="large" />}
                text="minushikakapuwaththa@gmail.com"
                />
                   <ContactInfoCard
                 icon={<GitHubIcon fontSize="large" />}
                text="https://github.com/MinushikaKapuwaththa"
                />
            </div>

            <div style={{flex:1}}>
                <ContactForm/>
            </div>

        </div>
    </section>
  )
}

export default ContactMe