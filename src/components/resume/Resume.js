import React, { useState } from 'react';
import './Resume.css'; 
import Education from './Education'; 
import Skills from './Skills';       
import Experience from './Experience'; 
import Achievement from './Achievement'; 

const Resume = () => {
  const [activeSection, setActiveSection] = useState('education'); 

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">
        <div className="title-container">
          <h1 className="title-heading">My Resume</h1>
        </div>
      </div>

      <div>
        <ul className="resume-navigation">
          <li
            onClick={() => setActiveSection('education')}
            className={`${activeSection === 'education' ? 'active' : ''} resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => setActiveSection('skills')}
            className={`${activeSection === 'skills' ? 'active' : ''} resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => setActiveSection('experience')}
            className={`${activeSection === 'experience' ? 'active' : ''} resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() => setActiveSection('achievements')}
            className={`${activeSection === 'achievements' ? 'active' : ''} resumeLi`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {activeSection === 'education' && <Education />}
      {activeSection === 'skills' && <Skills />}
      {activeSection === 'experience' && <Experience />}
      {activeSection === 'achievements' && <Achievement />}
    </section>
  );
}

export default Resume;
