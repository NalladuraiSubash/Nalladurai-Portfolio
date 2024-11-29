import React from 'react';
import './Footer.css';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div id="contact" className="footer-container">

      <div>Contact us</div>

      <div className="footer-icons">
        <div className="footer-icon">
          <a href="mailto:mnsubash3720@gmail.com">
            <EmailIcon style={{color:"#f39c12"}} />
          </a>
        </div>

        <div className="footer-icon">
          <a href='https://www.linkedin.com/in/m-nalladurai-subash'>
            <LinkedInIcon style={{color:"#f39c12"}}/>
          </a>
        </div>
      </div>

      <p className="footer-text">Nalladurai Subash @2024</p>
    </div>
  );
};

export default Footer;
