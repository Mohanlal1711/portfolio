import React from 'react';
import Education from './Education/Education';
 import './About.css'

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About <span>Me</span></h1>
      </div>
      
      <div className="about-content">
        <div className="about-image">
          <img src={require('../assets/mohanlalprofilepic.jpg')} alt="Profile" />
        </div>

        <div className="about-text">
          <h2>Myself, Mohanlal Sathyanarayanan</h2>
          <h3>Front-End Web Developer</h3>
          <p>
            I am an Electrical and Electronics Engineering Student from SMVEC. 
            Aspiring front-End Developer with a strong foundation in programming 
            and a passion for developing innovative Webpage.
          </p>
          <p>
            Eager to apply theoretical knowledge and learn new skills to contribute 
            effectively to projects in the field of Front-End software development.
            Working for myself to improve my skills. Love to Design a Webpage.
          </p>

          <div className="about-contact">
            <p><strong>Email:</strong> mohanlalsathya@gmail.com</p>
            <p><strong>Place:</strong> Puducherry, India - 605009</p>
          </div>

           <a href="https://drive.google.com/file/d/1E_HKilHEaUDqspRpFFTV9I9WDV352TvC/view?usp=sharing" className="resume-btn">Resume</a>
        </div>
      </div>
      <div>
   <Education/>
      </div>
     

    </div>
  );
}

export default About;
