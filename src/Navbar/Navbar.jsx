import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/closed
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Close menu when window is resized beyond mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay to capture clicks outside menu */}
      <div 
        className={`nav-overlay ${isOpen ? 'active' : ''}`} 
        onClick={closeMenu}
      ></div>
      
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo on the left */}
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Goodwish Engineering Logo" className="logo-img" />
          </Link>

          {/* Navigation links */}
          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li>
              <Link to="/home" className="nav-link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="nav-link" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/teams" className="nav-link" onClick={closeMenu}>
                Teams
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link" onClick={closeMenu}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/projects" className="nav-link" onClick={closeMenu}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-link login-link" onClick={closeMenu}>
                Login
              </Link>
            </li>
          </ul>

          {/* Hamburger menu icon for mobile */}
          <div 
            className={`hamburger ${isOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
          >
            <span className="hamburger-icon"></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;