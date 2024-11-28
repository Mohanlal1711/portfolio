// components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <i className="footer-links">
        <i><a href="/"><i class="fa-solid fa-house"></i></a></i>
        <i><a href="/About"><i class="fa-solid fa-user"></i></a></i>
        <i><a href="/Projects"><i class="fa-solid fa-link"></i></a></i>
        <i><a href="/ContactForm"><i class="fa-solid fa-paper-plane"></i></a></i>
      </i>
      <p> 
        "To succeed in your mission, You must have a single-minded devotion to your goal."
                                                                        <span className='qoutes'>-By APJ. Abdul Kalam</span>
        </p>
      <div className="social-icon">
      <a href="https://www.instagram.com/marvel_of_my_world?utm_source=qr&igsh=a3RtcWRkZnZkbzN2"><i className="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/mohan-lal-884628258/"><i className="fab fa-linkedin"></i></a>
      <a href="https://github.com/Mohanlal1711"><i className="fab fa-github"></i></a> 
      </div>
      
    </footer>
  );
}

export default Footer;
