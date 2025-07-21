import React from 'react';
import SkillCard from './skillCard';
import './skills.css';


const skillsData = [
  
  { name: 'Proteus', icon: require('../../assets/skills/proteus.png') },
  { name: 'Arduino IDE', icon: require('../../assets/skills/arduino.jpg') },
  { name: 'Autocad', icon: require( '../../assets/skills/autocad.png') },
  { name: 'Embedded C', icon: require('../../assets/skills/embedded.png') },
  { name: 'MPLab X IDE', icon: require('../../assets/skills/mplab.png') },
  { name: 'Keil UVision5', icon: require('../../assets/skills/keil.jpg') },
  { name: 'C', icon: require('../../assets/skills/c.png') },
  { name: 'JAVA', icon: require('../../assets/skills/java.png') },
  { name: 'HTML', icon: require('../../assets/skills/html.png') },
  { name: 'CSS', icon: require('../../assets/skills/css.png') },
  { name: 'React JS', icon: require('../../assets/skills/react.png') },
  { name: 'MySQL', icon: require('../../assets/skills/MySQL.png') }
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
