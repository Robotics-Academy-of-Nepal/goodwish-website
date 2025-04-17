import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import companyLogo from '../assets/logo.png'; // Update path as needed
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Logo */}
        <div className="footer-logo-section">
          <Link to="/home">
            <img src={companyLogo} alt="Goodwish Engineering Logo" className="footer-logo" />
          </Link>
          <p className="copyright">© 2023-{new Date().getFullYear()} Goodwish Engineering</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links-section">
          <h4>Useful Links</h4>
          <nav className="footer-nav">
            <Link to="/home" className="footer-link">Home</Link>
            <Link to="/about-us" className="footer-link">About Us</Link>
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/teams" className="footer-link">Teams</Link>
            <Link to="/products" className="footer-link">Products</Link>
          </nav>
        </div>

        {/* Contact Information */}
        <div className="footer-contact-section" id="contact">
          <h4>Contact Us</h4>
          <div className="contact-info">
            <p><strong>Address:</strong> Kupondole, Lalitpur, Nepal</p>
            <p><strong>Phone:</strong> 01-5400114</p>
            <p><strong>Email:</strong> info@goodwish.com.np</p>
          </div>
          <div className="social-links">
            <a href="https://www.facebook.com/p/Goodwish-Engineering-61571584179109/" target="_blank" rel="noopener noreferrer" className="social-link"><FaFacebook /></a>
            <a href="https://www.linkedin.com/company/goodwish-engineering/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
            {/* <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">IG</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;