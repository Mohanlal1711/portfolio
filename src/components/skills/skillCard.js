import React from 'react';
import './skillcard.css';

const SkillCard = ({ name, icon }) => {
  return (
    <div className="skill-card">
      <img src={icon} alt={`${name} icon`} className="skill-icon" />
      <p>{name}</p>
    </div>
  );
};

export default SkillCard;
