import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Skill from "./components/skill/Skills";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Footer from "./components/footer/Footer";

import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <Banner />
        <Skill />
        <Projects />
        <Resume />
        <Footer />
      </div>
    </div>
  );
}

export default App;
