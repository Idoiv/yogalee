import React from 'react';
import './Introduction.css';
import { useTranslation } from 'react-i18next';  // Import useTranslation hook

const Introduction = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;  // Assuming i18n.language gives you the current language

  return (
    <div dir={currentLang === 'he' ? 'rtl' : 'ltr'} className="intro-container" style={{ backgroundImage: "url('/venicesunset.jpg')", backgroundSize: 'cover' }}>
      <div className="intro-content">
        <div className="intro-text">
          <h1>{t('about_me_title')}</h1>
          <p>{t('about_me_description')}</p>
        </div>
        <div className="intro-image">
          <img src="/me.jpeg" alt={t('surfskate_teacher')} className="img-fluid rounded-circle" />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
