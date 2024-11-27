import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import './LeftBanner.css'; 

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="left-banner-container">
      <div className="banner-text">
        <h4 className="welcome-text">WELCOME TO MY WORLD</h4>
        <h1 className="main-title">
          Hi, I'm <span className="highlighted-name">Nalladurai Subash</span>
        </h1>
        <h2 className="sub-title">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="description-text">
        I am a full-stack web developer with a focus on building responsive, scalable, and user-friendly web applications. My goal is to combine my skills in both front-end and back-end development to create seamless experiences that meet user needs and deliver business value. I am always eager to learn new technologies and stay ahead of industry trends to create impactful, high-quality solutions.
        </p>
      </div>
      <div className="social-links-container">
      </div>
    </div>
  );
};

export default LeftBanner;
