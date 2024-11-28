import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'AMBER-2022-NIT-KARAIKAL',
      description: 'Secured 2nd Prize With The Project Coal mine coat-suit',
      prize: 'INR 1,000 Cash Prize',
    },
    
    {
      title: 'WISSENAIRE - SIMATS - 2022',
      description: 'Secured Grand Finalist With The Project Pre indicator for cylinder booking and leakage detector',
      prize: 'Recived a certificate',
      
    },
    {
      title: "KORSHAN'23 - Coimbatore ",
      description: 'Actively Participatedin  Paper Presentation with topic of "Smart Duster"',
      prize: 'Recived a certificate',
    },
    {
      title: 'ELYTRICO - 2K23',
      description: 'Actively participated in project expo with project of "Smart Duster"',
      prize: 'Recived a certificate',
    },
    {
      title: "NAKSHATRA'23",
      description: 'Secured 1st Prize in project Expo',
      prize: 'INR 1,000 Cash Prize',
    },
    {
      title: 'VIRTUSA- CHENNAI - 2024',
      description: 'Participated With in the Hackathon',
      prize: 'Recived a certificate',
    },
    
  ];

  return (
    <div className="achievements-section">
      <h1 className="achievements-title">Achievements</h1>
      <div className="timeline">
        {achievements.map((achievement, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="content-box">
              <h2>{achievement.title}</h2>
              <p>{achievement.description}</p>
              {achievement.prize && <p className="prize">{achievement.prize}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
