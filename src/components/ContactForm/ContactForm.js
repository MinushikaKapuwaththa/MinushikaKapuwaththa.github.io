import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_45lexaq', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message. Please try again later.');
      });
    
    e.target.reset();
  };

  return (
    <div className='contact-form-content'>
      <form ref={form} onSubmit={sendEmail}>
        <div className='name-container'>
          <input type='text' name='firstname' placeholder='First Name' required />
          <input type='text' name='lastname' placeholder='Last Name' required />
        </div>
        <input type='email' name='email' placeholder='Email' required />
        <textarea name='message' placeholder='Message' rows={3} required />
        <button type='submit'>SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;