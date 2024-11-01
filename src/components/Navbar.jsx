import React, { useState } from "react";
import "../assets/css/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">HYPERESTATE</div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li>Property</li>
        <li>Services</li>
        <li>Product</li>
        <li>About Us</li>
      </ul>
      <button className="contact-button">Contact Us</button>
    </nav>
  );
};

export default Navbar;
