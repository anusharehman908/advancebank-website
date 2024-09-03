import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';
import logo from '../../assets/12.svg'; // Make sure to replace this path with the actual path to your logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <img src={logo} alt="Company Logo" className="footer-logo" />
            <div className="footer-info">
              <h3>About Us</h3>
              <p>We are a leading company providing top-notch services and solutions. Our dedicated team works tirelessly to deliver excellence and innovation in every project.</p>
            </div>
          </div>
          <div className="footer-center">
            <div className="footer-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="footer-right">
            <h3>Contact</h3>
            <p>Email: anusharehmanqureshi.com</p>
            <p>Phone: 03320405516</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
