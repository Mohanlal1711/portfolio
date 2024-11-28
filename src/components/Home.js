import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profileImage from '../assets/hero.png'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import './../assets/style.css'; 

function Home() {
  const [text] = useTypewriter({
    words: ['Front-End Developer', 'PCB Designer', 'Co-Ordinator', 'Photographer'],
    loop: true, 
    typeSpeed: 100,
    deleteSpeed: 70,
    delaySpeed: 1000, 
  });

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          Hello, I'm <span className="highlight">{text} <Cursor /></span>
        </h1>
        <p>
          My name is <span className="highlight">Mohanlal Sathiyanarayanan</span>! I'm a self-motivated, highly passionate, and hardworking fresher looking for an opportunity to work in a challenging organization to utilize my skills and knowledge to work for the growth of the organization.
        </p>
        <div className="buttons">
          <button className="btn hire-btn"><a href="mailto:mohanlalsathya@gmail.com"> Hire Me</a></button>
          <button className="btn download-btn"><a href="https://drive.google.com/file/d/1l5UGFXBI6EPa4qOXlnTWD6tML1tFSJB2/view?usp=sharing">Download CV</a></button>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/marvel_of_my_world" aria-label="Instagram Profile">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/mohan-lal-884628258/" aria-label="LinkedIn Profile">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Mohanlal1711" aria-label="GitHub Profile">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="profile-image">
        <img src={profileImage} alt="Mohanlal Sathiyanarayanan" />
      </div>
    </section>
  );
}

export default Home;
