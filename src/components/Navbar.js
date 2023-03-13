import React, { useState } from 'react';
import { FaMoon,FaBars, FaSun, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from "../images/logo.png";
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add your own logic to toggle dark mode here
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>

          <button className="menu-icon" onClick={toggleMenu}>
            <FaBars />
          </button>

          <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <li className="menu-item">
              <a href="#">Home</a>
            </li>
            <li className="menu-item">
              <a href="#">About</a>
            </li>
            <li className="menu-item">
              <a href="#">Services</a>
            </li>
            <li className="menu-item">
              <a href="#">Products</a>
            </li>
            <li className="menu-item">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <button className="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button className="icon">
            <FaShoppingCart />
          </button>

          <button className="icon">
            <FaUser />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
