import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>© 2023 yogalee.fit. All rights reserved</p>
      <p>Built by Ido Ivry</p>
      <a href="https://www.linkedin.com/in/ido-ivry/" target="_blank" rel="noopener noreferrer" className="footer-link">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default Footer;
