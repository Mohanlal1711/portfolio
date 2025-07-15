import React from 'react';
import './Fproject.css';  
import projectImage from '../../assets/PROJECTPHOTO.jpg';  

const Fproject = () => {
  return (
    <div className="project-container">
      {/* Left side image */}
      <div className="project-image">
        <img src={projectImage} alt="Project" />
      </div>
      
      {/* Right side content */}
      <div className="project-content">
        <h1 style={{"color":'#640D5F'}}>PROJECT</h1>
        <h2 > <span style={{"color":'#7a5cf4'}} className='title'>TITLE</span> : IoT Integrated Sericulture Assistance and Automatic Food Feeder</h2>
        <p><span style={{"color":'#7a5cf4'}} className='title'>Problem Statement:</span> Traditional sericulture faces issues like inconsistent temperature control, manual feeding, high labor costs, and disease management challenges, leading to reduced silk yield and quality.</p>
        
        <h3 style={{"color":'#7a5cf4'}}><span className='title'>Objective:</span></h3>
        <ul>
          <li>Automate temperature control.</li>
          <li>Implement smart lighting.</li>
          <li>Automate feeding mechanisms.</li>
          <li>Reduce labor costs.</li>
        </ul>

        <h3 style={{"color":'#7a5cf4'}}><span className='title'>Project Description:</span></h3>
        <p>This project develops an IoT-based system for automating key sericulture tasks like temperature control, feeding, and monitoring, to improve silk production efficiency and quality.</p>
        <button className="btn download-btn"><a href="https://drive.google.com/drive/folders/1HPtjcEMFXPQHJzqQ13jru7mbW5th4hvA?usp=sharing">Download Documents</a></button>
      </div>
    </div>
  );
}

export default Fproject;
