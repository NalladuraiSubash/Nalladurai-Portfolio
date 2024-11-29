import React from 'react';
import './RightBanner.css'; 
import photo from "../../assets/images/photo/final.png"

const RightBanner = () => {
  return (
    <div className="right-banner-container">
      <img
        className="banner-image"
        src={photo} 
        alt="loading"
      />
      <div className="gradient-overlay"></div>
    </div>
  );
}

export default RightBanner;
