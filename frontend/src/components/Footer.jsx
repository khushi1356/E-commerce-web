import React from 'react';
import { Phone, Mail, GitHub, LinkedIn, YouTube, Instagram, LocationOn } from '@mui/icons-material';
import '../componentStyles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Section 1: Contact & Social */}
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p><LocationOn fontSize='small' className='icon-align' /> 123, Tech Park, Gujarat, India</p>
          <p><Phone fontSize='small' className='icon-align' /> +91 9510715901</p>
          <p><Mail fontSize='small' className='icon-align' /> khushikalathiya1356@gmail.com</p>
          
          {/* Social Icons ko yahi contact ke niche rakha hai taaki space bache */}
          <div className="social-links">
            <a href="https://github.com/khushi1356" target="_blank"><GitHub className='social-icon'/></a>
            <a href="https://www.linkedin.com/in/khushi-kalathiya-320615342/" target="_blank"><LinkedIn className='social-icon'/></a>
            <a href="#" target="_blank"><YouTube className='social-icon'/></a>
            <a href="#" target="_blank"><Instagram className='social-icon'/></a>
          </div>
        </div>

        {/* Section 2: Quick Links */}
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Section 3: About (Last Position) */}
        <div className="footer-section about">
          <h3>About FastShop</h3>
          <p>
            At FastShop, we believe in quality and trust. We bring you a curated 
            collection of premium products at the best prices, ensuring a seamless 
            shopping experience delivered right to your doorstep.
          </p>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 KK coding. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;