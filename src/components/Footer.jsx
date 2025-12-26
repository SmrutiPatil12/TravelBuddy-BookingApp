// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>TravelWorld</h3>
          <p>Your trusted partner for unforgettable tours and travel experiences around the globe. Explore the world with us!</p>
        </div>
        
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/tours">Tours</a></li>
            <li><a href="/destinations">Destinations</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        
        <div className="footer-section services">
          <h4>Our Services</h4>
          <ul>
            <li><a href="/services">Tour Packages</a></li>
            <li><a href="/services">Hotel Booking</a></li>
            <li><a href="/services">Flight Booking</a></li>
            <li><a href="/services">Visa Assistance</a></li>
            <li><a href="/services">Travel Insurance</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@travelworld.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Adventure Street, Travel City, TC 12345</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 TravelWorld. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;