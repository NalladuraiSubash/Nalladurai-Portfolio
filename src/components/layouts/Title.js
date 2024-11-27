// Title.js
import React from 'react';
import './Title.css';

const Title = ({ title, des }) => {
  return (
    <div className="title-container">
      <h3 className="title-subtitle">{title}</h3>
      <h1 className="title-heading">{des}</h1>
    </div>
  );
};

export default Title;
