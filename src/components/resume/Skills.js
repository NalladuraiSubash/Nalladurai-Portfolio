import React from 'react';
import './Skills.css'; 

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-column">
        <div className="skills-header">
          <h2 className="skills-title">Professional Skills</h2>
        </div>
        <div className="skills-list">
          {['Leadership', 'Project Management', 'Client Communication', 'Teamwork', 'Problem Solving'].map((skill, index) => (
            <div key={index} className="skill-item">
              <p className="skill-name">{skill}</p>
              <span className="skill-bar">
                <span className={`skill-progress skill-progress-${index}`}>
                  <span className="skill-percentage">100%</span>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-column">
        <div className="skills-header">
          <h2 className="skills-title">Technical Skills</h2>
        </div>
        <div className="skills-list">
          {['React', 'JavaScript', 'HTML 5', 'CSS3', 'Node.js', 'Git'].map((skill, index) => (
            <div key={index} className="skill-item">
              <p className="skill-name">{skill}</p>
              <span className="skill-bar">
                <span className={`skill-progress skill-progress-${index + 5}`}>
                  <span className="skill-percentage">90%</span>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
