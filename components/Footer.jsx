"use client"
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, ArrowUp } from 'lucide-react';
import logo from '../images/logo1.png';
import Image from 'next/image';
const Footer = () => {
  const scrollToTops = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">
            <div className="logo-text">
              <Image src={logo} alt="Nu Begins Logo" width={500} height={100} style={{width:'200px', height:'auto'}}/>
            </div>
            <p className="footer-description">
              We are a team of passionate developers, designers, and marketers dedicated to creating innovative digital solutions for businesses of all sizes.
            </p>
            <div className="social-icons">
              <a href="https://www.facebook.com/profile.php?id=61577202997656" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="social-icon" style={{color:"white"}}/>
              </a>
              <a href="https://www.instagram.com/nubegins_solutions/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="social-icon" style={{color:"white"}}/>
              </a>
              <a href="https://www.linkedin.com/in/nubegins-solutions-457b84359/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="social-icon" style={{color:"white"}}/>
              </a>
              
            </div>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-list">
            <li>
                <a href="/blog" className="footer-link">Blog</a>
              </li>
              <li>
                <a href="/#services" className="footer-link">Services</a>
              </li>
              <li>
                <a href="/#courses" className="footer-link">Courses</a>
              </li>
              <li>
                <a href="/#portfolio" className="footer-link">Portfolio</a>
              </li>
              <li>
                <a href="/#team" className="footer-link">Team</a>
              </li>
              <li>
                <a href="/#testimonial" className="footer-link">Testimonials</a>
              </li>
              <li>
                <a href="/contact" className="footer-link">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-heading">Contact Info</h3>
            <ul className="footer-list">
              <li className="footer-contact-info">
                Sector 62, Noida, UP, India
              </li>
              <li>
                <a href="mailto:nubeginssolutions@gmail.com" className="footer-link">
                  nubeginssolutions@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+916306492433" className="footer-link">
                  +91 6306492433
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-rights">
            &copy; {new Date().getFullYear()} Nu Begins. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTops}
            className="scroll-to-top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="scroll-icon" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;