import React from "react";
import "../Style/Footer.css"; // external CSS
import { FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Accreditations */}
        <div className="footer-column">
          <h3>Accreditations</h3>
          <div className="accreditations">
            {/* <img src="/images/umass.png" alt="UMASS" />
            <img src="/images/medical.png" alt="Medical Body" /> */}
          </div>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="footer-column">
          <h3>Newsletter</h3>
          <form className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MedExcel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
