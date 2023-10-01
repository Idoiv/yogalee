import React from 'react';
import './Courses.css';
import { useTranslation } from 'react-i18next';

const Courses = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'he'; // Assuming 'he' is the code for Hebrew

  return (
    <div className={`courses-container ${isRTL ? 'rtl' : ''}`}>
      <h1 className="courses-title">Vinyasa Yoga</h1>
      <div className="courses-description">
        <p>{t('yoga_type')}</p>
      </div>
    </div>
  );
};

export default Courses;
