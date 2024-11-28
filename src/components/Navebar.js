// components/Navbar.js
import React from 'react';
import './Navbar.css';
import logoImage from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
     <Link to="/" style={{"textDecoration":"None"}}> <div className="logo">  <img src={logoImage} alt="Profile" />  <span className='logo-name'>Mohanlal Sathiyanarayanan</span></div></Link>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/About">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/contactForm">Contact</a></li>
      </ul>
      <span></span>
    </nav>
  );
}

export default Navbar;
