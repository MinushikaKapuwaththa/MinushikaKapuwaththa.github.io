import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Create a combined name field from firstname and lastname
    const formData = new FormData(form.current);
    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    
    // Add a hidden field for the combined name
    formData.append('name', `${firstName} ${lastName}`);
    
    // Convert FormData to object that emailjs can use
    const formValues = Object.fromEntries(formData.entries());
    
    emailjs.send('service_y15cz6j', 'template_wx9i86b', formValues, 'X21fh0XSzL9pEp6h9')
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