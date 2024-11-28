import React, { useState } from 'react';
import './ContactForm.css';
import profileImage from '../assets/profileImage.jpg'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-info">
        <h2>Find Me</h2>
        <div className="contact-details">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="contact-text">
            <p><strong>Email:</strong> mohanlalsathya@gmail.com</p>
            <p><strong>Phone:</strong> +91-8825514453</p>
          </div>
        </div>
      </div>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          type="text" 
          name="subject" 
          placeholder="Subject" 
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea 
          name="message" 
          placeholder="Message" 
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="send-btn">Send</button>
      </form>
    </div>
  );
}

export default ContactForm;
