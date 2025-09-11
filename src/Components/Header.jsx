import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Style/Header.css"; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="main-header">
      <div className="logo">LOGO</div>

      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>

        <div className="dropdown">

          <button className="dropbtn" onClick={toggleDropdown}>
            Courses / Programs ▾
          </button>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="/courses">Doctors</a>
              <a href="/courses">Nurses</a>
              <a href="/courses">Students</a>
              <a href="/courses">Hospitals</a>
            </div>
          )}
        </div>

        <a href="/admissions">Admissions / Apply Now</a>
        <a href="/contact">Contact Us</a>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
