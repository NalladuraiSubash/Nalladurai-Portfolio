import React from 'react';
import './Skills.css';

const Skills = () => {
  const professionalSkills = [
    { name: 'Leadership', percentage: 95 },
    { name: 'Project Management', percentage: 90 },
    { name: 'Client Communication', percentage: 85 },
    { name: 'Teamwork', percentage: 98 },
    { name: 'Problem Solving', percentage: 92 },
  ];

  const technicalSkills = [
    { name: 'React', percentage: 90 },
    { name: 'JavaScript', percentage: 88 },
    { name: 'HTML 5', percentage: 95 },
    { name: 'CSS3', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'Git', percentage: 87 },
  ];

  return (
    <div className="skills-container">
      <div className="skills-column">
        <div className="skills-header">
          <h2 className="skills-title">Professional Skills</h2>
        </div>
        <div className="skills-list">
          {professionalSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <p className="skill-name">{skill.name}</p>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="skills-column">
        <div className="skills-header">
          <h2 className="skills-title">Technical Skills</h2>
        </div>
        <div className="skills-list">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <p className="skill-name">{skill.name}</p>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.percentage}%` }}
                >
                  <span className="skill-percentage">{skill.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
