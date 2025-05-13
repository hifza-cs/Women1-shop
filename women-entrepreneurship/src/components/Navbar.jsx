import React, { useState } from 'react';
import './Navbar.css'; // Ensure CSS file is correctly linked
import logo from '../assets/Logo.png'; // Import logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo-section" onClick={() => setShowModal(true)}>
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="brand-name">MYSHOP</span>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      </nav>

      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <span className="close-modal" onClick={closeModal}>×</span>
            <img src={logo} alt="Logo Preview" className="modal-logo" />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;