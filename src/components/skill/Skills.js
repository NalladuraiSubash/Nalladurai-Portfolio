import React from 'react';
import './Skill.css';
import Html from '../../assets/images/skill/2.png';
import CSS from '../../assets/images/skill/5.png';
import JS from '../../assets/images/skill/3.png';
import ReactJs from '../../assets/images/skill/4.png';
import ExpressJs from '../../assets/images/skill/6.png';
import Mongodb from '../../assets/images/skill/7.png';
import Postgres from '../../assets/images/skill/PostgreSQL_logo.3colors.120x120.png';
import Vscode from '../../assets/images/skill/vscode.jpeg';
import NodeJS from '../../assets/images/skill/10.png';
import NextJS from '../../assets/images/skill/8.png';
import Git from '../../assets/images/skill/9.png';
import Postman from '../../assets/images/skill/Postman.jpeg';


const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="title">
        <h2>Skills</h2>
      </div>
      <div className="skills-grid">
        <div className="card">
          <div className="card-header">
            <img className="icons" src={Html} alt="HTML" />
          </div>
          <div className="card-body">
            <h3>HTML</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={CSS} alt="CSS" />
          </div>
          <div className="card-body">
            <h3>CSS</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={JS} alt="JavaScript" />
          </div>
          <div className="card-body">
            <h3>JavaScript</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={ReactJs} alt="ReactJS" />
          </div>
          <div className="card-body">
            <h3>React JS</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={NextJS} alt="NextJS" />
          </div>
          <div className="card-body">
            <h3>Next JS</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={NodeJS} alt="NodeJS" />
          </div>
          <div className="card-body">
            <h3>Node JS</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={ExpressJs} alt="ExpressJS" />
          </div>
          <div className="card-body">
            <h3>Express JS</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={Mongodb} alt="MongoDB" />
          </div>
          <div className="card-body">
            <h3>MongoDB</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={Postgres} alt="PostgreSQL" />
          </div>
          <div className="card-body">
            <h3>PostgreSQL</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={Git} alt="VS Code" />
          </div>
          <div className="card-body">
            <h3>Git</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={Postman} alt="VS Code" />
          </div>
          <div className="card-body">
            <h3>Postman</h3>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <img className="icons" src={Vscode} alt="VS Code" />
          </div>
          <div className="card-body">
            <h3>VS Code</h3>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
