import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import TMS from '../../assets/images/projects/TMS.png';
import './Projects.css';  

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="title-container">
        <h1 className="title-heading">My Projects</h1>
      </div>
      <div className="projects-grid">
        <div className="projects-card">
          <div className="projects-card-image">
            <img
              className="project-image group-hover"
              src={TMS}  
              alt="project"
            />
          </div>
          <div className="projects-card-content">
            <div className="projects-card-header">
              <h3 className="project-title">Task Management System</h3>
              <div className="project-icons">
                <a 
                  href='https://github.com/NalladuraiSubash/TMS-WebClient.git' 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="icon github-icon">
                    <BsGithub />
                  </span>
                </a>
                <a 
                  href='https://tms-webclient.onrender.com/' 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="icon globe-icon">
                    <FaGlobe />
                  </span>
                </a>
              </div>
            </div>
            <p className="project-description">
              The Task Management System (TMS) is a simple web application that helps users keep track of their tasks. It allows users to create, view, edit, and delete tasks. This system helps individuals or teams stay organized by managing tasks efficiently in one place.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
