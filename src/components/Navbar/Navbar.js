
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import { useLanguage } from '../../LanguageContext';  // adjust the path accordingly

const navItems = [
  { label: 'home_title', link: '/' },
  { label: 'faq_title', link: '/faq' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = language === 'en' ? 'he' : 'en';
    setLanguage(newLang);
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <a href={`/${language}`}>
            <img src="/favicon.ico" alt="Company" className="navbar-logo" />
          </a>
        </div>
        <div className="navbar-center">
          <nav className={isMenuOpen ? "navbar-list active" : "navbar-list"}>
            {navItems.map((item, index) => (
              <li key={index} className="navbar-item">
                <a 
                  href={`/${language}${item.link}`} 
                  target={item.external ? '_blank' : '_self'} 
                  rel="noreferrer" 
                  className="navbar-link"
                >
                  {t(item.label)}
                </a>
              </li>
            ))}
          </nav>
        </div>
        <div className="navbar-right">
          <button className="menu-icon" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </button>
          <span className="language-label">{i18n.language.toUpperCase()}</span>
          <label className="language-toggle">
            <input type="checkbox" checked={i18n.language === 'he'} onChange={changeLanguage} />
            <span className="language-slider"></span>
          </label>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;