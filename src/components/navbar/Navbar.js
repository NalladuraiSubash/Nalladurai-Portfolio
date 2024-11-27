import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="logo">
        <span className="navbar-title">My Portfolio</span>
      </div>
      <div className="menu">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Project</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div> 
  );
}

export default Navbar;
