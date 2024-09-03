import React, { useState } from 'react';
import './ContactRegistrationForm.css';

const ContactRegistrationForm = () => {
  const [formType, setFormType] = useState('contact'); // State to toggle between contact and registration forms

  const handleFormTypeChange = (type) => {
    setFormType(type);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <button
          className={`form-toggle ${formType === 'contact' ? 'active' : ''}`}
          onClick={() => handleFormTypeChange('contact')}
        >
          Contact Us
        </button>
        <button
          className={`form-toggle ${formType === 'registration' ? 'active' : ''}`}
          onClick={() => handleFormTypeChange('registration')}
        >
          Register
        </button>
      </div>
      <div className="form-content">
        {formType === 'contact' ? (
          <form className="form">
            <h2>Contact Us</h2>
            <label htmlFor="contact-name">Name</label>
            <input type="text" id="contact-name" name="name" required />

            <label htmlFor="contact-email">Email</label>
            <input type="email" id="contact-email" name="email" required />

            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" rows="5" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        ) : (
          <form className="form">
            <h2>Register</h2>
            <label htmlFor="registration-name">Full Name</label>
            <input type="text" id="registration-name" name="fullName" required />

            <label htmlFor="registration-email">Email</label>
            <input type="email" id="registration-email" name="email" required />

            <label htmlFor="registration-password">Password</label>
            <input type="password" id="registration-password" name="password" required />

            <label htmlFor="registration-confirm-password">Confirm Password</label>
            <input type="password" id="registration-confirm-password" name="confirmPassword" required />

            <button type="submit">Register</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactRegistrationForm;
