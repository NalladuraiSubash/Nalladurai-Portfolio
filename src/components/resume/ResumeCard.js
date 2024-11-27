import React from 'react';
import './ResumeCard.css';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className="resume-card-container">
      <div className="line-container">
        <span className="circle-container">
          <span className="inner-circle"></span>
        </span>
      </div>
      <div className="card-content">
        <div className="card-header">
          <div>
            <h3 className="title">{title}</h3>
            <p className="sub-title">{subTitle}</p>
          </div>
          <div>
            <p className="result">{result}</p>
          </div>
        </div>
        <div className="description">{des}</div>
      </div>
    </div>
  );
};

export default ResumeCard;
