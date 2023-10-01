// MainPage.js

import React, { useState, useEffect } from 'react';
import LoadingPage from '../LoadingPage/LoadingPage';
import EpicMoments from '../EpicMoments/EpicMoments';  // Import EpicMoments
import Courses from '../Courses/Courses';  // Import Courses
import Footer from '../Footer/Footer';  // Import Footer
import './MainPage.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../LanguageContext';  // adjust the path accordingly
import OutlineWrapper from '../OutlineWrapper/OutlineWrapper';  // Import OutlineWrapper

const MainPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { language } = useLanguage(); // Fetch the language from context or state

  const direction = (language === 'he' || language === 'ar') ? 'rtl' : 'ltr';  // Add more right-to-left languages if needed

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }


  return (
    <div className="main-page" dir={direction}>
      <div className="skate-surfing-section" dir={direction}>
        <h1>{t('experience_thrill')}</h1>
        <p>{t('skate_surfing_description')}</p>
        <button onClick={() => {navigate(`/${language}/signup`)}}>
        {t('title')}
        </button>
        <br />
        <button onClick={() => {window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdU5Yk4RODZL_d-wHnLn_X8W5hjPBG6nLyV6YwHg7USToXGdw/viewform";}}> 
          {t('schedule_session')}
        </button>
      </div>
      
    </div>
  );
};

export default MainPage;
