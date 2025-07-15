import React from 'react';
import './Education.css';
import collegeImg from '../../assets/collegephoto.jpg';
import schoolImg from '../../assets/schoolimages.jpg'; 
import Skills from '../skills/skills';


const Education = () => {
  return (
    <section className="education-section">
      <h2 className="education-title">My Education</h2>
      <p className="education-subtitle">
        Spark Innovation, Wire Your Dreams, And Circuit Your Way To Success.
      </p>
      <div className="education-cards">
        {/* College Card */}
        <div className="education-card">
          <img src={collegeImg} alt="College" className="education-image" />
          <div className="education-content">
            <h3>Bachelor Of Technology In Electrical And Electronics Engineering</h3>
            <p>Sri Manakula Vinayagar Engineering College</p>
            <p>2021-2025 | CGPA : 7.77 | <span className="status-completed">Completed</span></p>
          </div>
        </div>

        {/* School Card */}
        <div className="education-card">
          <img src={schoolImg} alt="School" className="education-image" />
          <div className="education-content">
            <h3>HSC Computer Science | SSLC</h3>
            <p>Mutharaiyar Higher Secondary School | State Board</p>
            <p>2019-2021 | percentage : 82.67% | <span className="status-completed">Completed</span></p>
          </div>
        </div>
      </div>
      <Skills/>
    </section>
  );
};

export default Education;
