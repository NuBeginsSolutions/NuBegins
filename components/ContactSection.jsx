"use client"
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';
import { validateEmail, validatePhone, submitFormToSheet } from '../utils/formHandlers';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }
    
    setIsSubmitting(true);
    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeCeXgkzBCelV99Q3-zLKNfDYsv2ECl6uTaYyVmT8z5ALRKZw/formResponse";
    
    try {
      const formParams = new URLSearchParams();
    formParams.append("entry.759412016", formData.name); // Replace with actual entry ID
    formParams.append("entry.133989633", formData.email);
    formParams.append("entry.2145702591", formData.phone);
    formParams.append("entry.1803311406", formData.subject);
    formParams.append("entry.835972919", formData.message);
      const res = await fetch(googleFormUrl, {
        method: "POST",
        body: formParams,
        mode: "no-cors", // Prevents CORS issues
      })
      console.log(res)
      
      if (res.status===0) {
        toast.success("Thank you for your message. We'll get back to you shortly.");
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h3 className="contact-title">Get In Touch</h3>
        
        <p className="contact-description">
          Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
        </p>
        
        <div className="contact-details">
          <div className="contact-item">
            <div className="icon-container">
              <Phone className="contact-icon" />
            </div>
            <div>
              <h4 className="contact-heading">Phone</h4>
              <p className="contact-text">+91 6306492433</p>
            </div>
          </div>
          
          <div className="contact-item">
            <div className="icon-container">
              <Mail className="contact-icon" />
            </div>
            <div>
              <h4 className="contact-heading">Email</h4>
              <p className="contact-text">nubeginssolutions@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-item">
                       <div className="icon-container">
              <MapPin className="contact-icon" />
            </div>
            <div>
              <h4 className="contact-heading">Address</h4>
              <p className="contact-text">Sector 62, Noida, UP, India</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-form">
        <form onSubmit={handleSubmit} className="form-container">
          <div className="form-grid">
            <div>
              <label htmlFor="name" className="form-label">Full Name*</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`form-input ${errors.name ? 'input-error' : ''}`}
                placeholder="Your name"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="form-label">Email Address*</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
          </div>
          
          <div className="form-grid">
            <div>
              <label htmlFor="phone" className="form-label">Phone Number*</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`form-input ${errors.phone ? 'input-error' : ''}`}
                placeholder="Your phone number"
              />
              {errors.phone && <p className="error-message">{errors.phone}</p>}
            </div>
            
            <div>
              <label htmlFor="subject" className="form-label">Subject*</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`form-input ${errors.subject ? 'input-error' : ''}`}
                placeholder="What's this about?"
              />
              {errors.subject && <p className="error-message">{errors.subject}</p>}
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="form-label">Message*</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`form-textarea ${errors.message ? 'input-error' : ''}`}
              placeholder="Tell us what you need"
            ></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-button"
          >
            {isSubmitting ? 'Sending...' : (
              <>
                <p>Send Message</p>
                <Send className="send-icon" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;